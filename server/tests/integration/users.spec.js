const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const testData = require('../../src/utils/testUsersData');
const errorMessages = require('../../src/utils/errorMessages');

const listOfUsers = testData.list_of_users;
const singleUser = testData.single_user;
const emptyUsers = testData.empty_users;
const notStringUsers = testData.not_string_users;
const mobileDontMatchUser = testData.mobile_dont_match_user;
const bigMobileUser = testData.big_mobile_user;
const shortMobileUser = testData.short_mobile_user;
const wrongCountryUsers = testData.wrong_country_users;

const duplicatedError = errorMessages.users.duplicated.message;
const emptyError = errorMessages.users.empty.message;
const stringError = errorMessages.users.string.message;
const maxMobileError = errorMessages.users.mobile_max.message;
const minMobileError = errorMessages.users.mobile_min.message;
const patternMobileError = errorMessages.users.mobile_pattern.message;
const countryLengthError = errorMessages.users.country_length.message;

describe('USER', () => {
    beforeEach(async () => {
        // reset the test db
        await connection.migrate.rollback();
        // run the last migrations
        await connection.migrate.latest();
    });

    afterAll(() => connection.destroy());

    it(`USER: Create`, () => {
        listOfUsers.map(item => {
            request(app)
                .post('/user/new')
                .send(item)
                .end((err, res) => {
                    expect(res.body).toHaveProperty('id');
                    expect(res.body.id).toHaveLength(8);
                });
        });
    });

    it(`USER: Duplicated`, () => {
        const addSingleUser = () => {
            return request(app)
                .post('/user/new')
                .send(singleUser);
        }
        addSingleUser()
            .then(result => {
                expect(result.body).toHaveProperty('id');
                expect(result.body.id).toHaveLength(8);
            })
            .then(() => {
                request(app)
                    .post('/user/new')
                    .send(singleUser)
                    .end((err, res) => {
                        expect(res.body.error).toContain(duplicatedError);
                    });
            });
    });

    it(`USER: Empty property`, () => {
        emptyUsers.map( item => {
            request(app)
                .post('/user/new')
                .send(item)
                .end((err, res) => {
                    expect(res.body.message).toContain(emptyError);
                });
        });
    });

    it(`USER: Not a string`, () => {
        notStringUsers.map(item => {
            request(app)
                .post('/user/new')
                .send(item)
                .end((err, res) => {
                    expect(res.body.message).toContain(stringError);
                });
        });
    });

    it(`USER: Max mobile length`, () => {
        request(app)
            .post('/user/new')
            .send(bigMobileUser)
            .end((err, res) => {
                expect(res.body.message).toContain(maxMobileError);
            });
    });

    it(`USER: Min mobile length`, () => {
        request(app)
            .post('/user/new')
            .send(shortMobileUser)
            .end((err, res) => {
                expect(res.body.message).toContain(minMobileError);
            });
    });

    it(`USER: Mobile pattern`, () => {
        request(app)
            .post('/user/new')
            .send(mobileDontMatchUser)
            .end((err, res) => {
                expect(res.body.message).toContain(patternMobileError);
            });
    });

    it(`USER: Country Length`, () => {
        wrongCountryUsers.map(item => {
            request(app)
                .post('/user/new')
                .send(item)
                .end((err, res) => {
                    expect(res.body.message).toContain(countryLengthError);
                })
        });
    });
});