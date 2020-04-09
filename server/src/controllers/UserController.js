const generateUniqueId = require('../utils/generateUniqueId');
const checkAuthMaster = require('../utils/checkAuthMaster');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const masterAuth = req.headers.masterauth;
        checkAuthMaster(masterAuth, res);

        const user = await connection('user').select('*');
        
        return res.json(user);
    },
    async create(req, res) {
        const {
            name,
            mobile,
            city,
            country
        } = req.body;

        // User already in the app?
        const usedMobile = await connection('user')
            .where('mobile', mobile)
            .first();
    
        if (usedMobile) {
            return res.status(412).json({
                error: `Already exist a user with this mobile number: ${mobile}`
            });
        }

        const id = generateUniqueId();

        await connection('user').insert({
            id,
            name,
            mobile,
            city,
            country,
        });

        return res.json({ id });
    },
    async get(req, res) {
        const { id } = req.params;

        const user = await connection('user')
            .where('id', id);
        
        return res.json(user);
    },
    async update(req, res) {
        const { id } = req.params;
        
        const {
            name,
            mobile,
            city,
            country
        } = req.body;

        await connection('user')
            .where('id', id)
            .update({
                id,
                name,
                mobile,
                city,
                country,
            });
        
        return res.status(204).send();
    },
    async delete(req, res) {
        const { id } = req.params;
        
        const masterAuth = req.headers.masterauth;
        checkAuthMaster(masterAuth, res);

        checkId('user', res, id);

        await connection('user').where('id', id).delete();

        return res.status(204).send();
    }
};