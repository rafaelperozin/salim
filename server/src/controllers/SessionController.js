const connection = require('../database/connection');

module.exports = async function(req, res) {

    const { id } = req.body;
    const user = await connection('user')
        .where('id', id)
        .select('name')
        .first();
    
    if (!user) {
        return res.status(400).json({ error: 'No USER found with this id' });
    }

    return res.json(user);

}