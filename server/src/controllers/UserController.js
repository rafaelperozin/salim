const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        // Authorized?
        const masterAuth = req.headers.masterauth;

        if (masterAuth !== 'salim') {
            return res.status(401).json({
                error: 'Operation not permitted.'
            });
        }

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

        // Authorized?
        const masterAuth = req.headers.masterauth;

        if (masterAuth !== 'salim') {
            return res.status(401).json({
                error: 'Operation not permitted.'
            });
        }

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
        
        // Authorized?
        const masterAuth = req.headers.masterauth;

        if (masterAuth !== 'salim') {
            return res.status(401).json({
                error: 'Operation not permitted.'
            });
        }

        // Valid id?
        const user = await connection('user')
            .where('id', id)
            .first();
    
        if (user.id !== id) {
            return res.status(400).json({
                error: 'Invalid User.'
            });
        }

        await connection('user').where('id', id).delete();

        return res.status(204).send();
    }
};