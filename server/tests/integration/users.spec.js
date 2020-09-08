const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('USER', () => {
    beforeEach(async () => {
        // reset the test db
        await connection.migrate.rollback();
        // run the last migrations
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it(`Should be able to create a new USER`, async () => {
        const users = [
            { name: "Tester Testing", mobile: "4407378113666", city: "New York", country: "US" },
            { name: "Luciano G. Borges", mobile: "12363351668", city: "Vancouver", country: "CA" },
            { name: "Simone R. C. Santy", mobile: "5541988238803", city: "Curitiba", country: "BR" },
            { name: "Rafaella Garcia Barella Petozoto", mobile: "447378113666", city: "Northampton", country: "UK" },
            { name: "Bruno", mobile: "34655352228", city: "Ilhas Canarias", country: "ES" },
            { name: "B. Drummont", mobile: "17866626006", city: "Miami", country: "US" },
            { name: "Rodrigão", mobile: "64211258100", city: "Blablu", country: "NZ" },
            { name: "pc", mobile: "0000000000", city: "EN", country: "UK" },
        ];
        users.map(async item => {
            const response = await request(app)
                .post('/user/new')
                .send(item);
            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
        });
    });

    it(`Shouldn't be able to create a new USER`, async () => {

        // ! Test duplicated user
        // const duplicatedUser = await request(app)
        //     .post('/user/new')
        //     .send({ name: "Tester Testing", mobile: "4407378113666", city: "New York", country: "US" });
        // expect(duplicatedUser.body.message).toContain('Already exist a user with this mobile number');

        const emptyUsers = [
            { name: "", mobile: "4407378113666", city: "Northampton", country: "UK" },
            { name: "Tester Testing", mobile: "", city: "Northampton", country: "UK" },
            { name: "Tester Testing", mobile: "4407378113666", city: "", country: "UK" },
            { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: "" }
        ];
        emptyUsers.map(async item => {
            const response = await request(app)
                .post('/user/new')
                .send(item);
            expect(response.body.message).toContain('is not allowed to be empty');
        });

        const notStringUsers = [
            { name: 15, mobile: "4407378113666", city: "Northampton", country: "UK" },
            { name: 1.5, mobile: "4407378113666", city: "Northampton", country: "UK" },
            { name: null, mobile: "4407378113666", city: "Northampton", country: "UK" },
            { name: false, mobile: "4407378113666", city: "Northampton", country: "UK" },
            { name: true, mobile: "4407378113666", city: "Northampton", country: "UK" },
            { name: "Tester Testing", mobile: 15, city: "Northampton", country: "UK" },
            { name: "Tester Testing", mobile: 1.5, city: "Northampton", country: "UK" },
            { name: "Tester Testing", mobile: null, city: "Northampton", country: "UK" },
            { name: "Tester Testing", mobile: false, city: "Northampton", country: "UK" },
            { name: "Tester Testing", mobile: true, city: "Northampton", country: "UK" },
            { name: "Tester Testing", mobile: "4407378113666", city: 15, country: "UK" },
            { name: "Tester Testing", mobile: "4407378113666", city: 1.5, country: "UK" },
            { name: "Tester Testing", mobile: "4407378113666", city: null, country: "UK" },
            { name: "Tester Testing", mobile: "4407378113666", city: false, country: "UK" },
            { name: "Tester Testing", mobile: "4407378113666", city: true, country: "UK" },
            { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: 15 },
            { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: 1.5 },
            { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: null },
            { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: false },
            { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: true },
        ];
        notStringUsers.map(async item => {
            const response = await request(app)
                .post('/user/new')
                .send(item);
            expect(response.body.message).toContain('must be a string');
        });

        const biggerMobile = await request(app)
            .post('/user/new')
            .send({
                name: "Tester Testing",
                mobile: "04407378113666",
                city: "Northampton",
                country: "UK"
            });
        expect(biggerMobile.body.message).toContain('length must be less than or equal to 13 characters long');

        const shorterMobile = await request(app)
            .post('/user/new')
            .send({
                name: "Tester Testing",
                mobile: "3666",
                city: "Northampton",
                country: "UK"
            });
        expect(shorterMobile.body.message).toContain('length must be at least 10 characters long');

        const mobileMatch = await request(app)
            .post('/user/new')
            .send({
                name: "Tester Testing",
                mobile: "+447378113666",
                city: "Northampton",
                country: "UK"
            });
        expect(mobileMatch.body.message).toContain('fails to match the required pattern');

        const wrongCountry = [
            { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: "U" },
            { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: "UKD" },
        ];
        wrongCountry.map(async item => {
            const wrongLength = await request(app)
                .post('/user/new')
                .send(item);
            expect(wrongLength.body.message).toContain('length must be 2 characters long');
        });
    });
});