const checkAuthMaster = require('../../src/validations/checkAuthMaster');
require('dotenv').config();

describe('Validate the master user', () => {
    it(`Shouldn't return any error`, () => {
        const isMaster = checkAuthMaster(process.env.MASTER_CODE);
        expect(isMaster).toBe(undefined);
    });
});