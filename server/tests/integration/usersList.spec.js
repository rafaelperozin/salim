const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const testData = require('../../src/utils/testUsersData');

require('dotenv').config();

const listOfUsers = testData.list_of_users;

describe('USER', () => {
    beforeAll(async () => {
        // reset the test db
        await connection.migrate.rollback();
        // run the last migrations
        await connection.migrate.latest();
    });

    afterAll(() => connection.destroy());

    it(`USER: List`, () => {
        request(app)
            .post('/user/new')
            .send(listOfUsers[0])
            .send(listOfUsers[1])
            .send(listOfUsers[2])
            .then(() => {
                request(app)
                    .get('/user')
                    .set('masterauth', process.env.MASTER_CODE)
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body).toHaveLength(3);
                    });
            });
    });
});