const connection = require('../database/connection');

module.exports = async function checkAuthorization(user_id, res) {
    if (user_id) {
        const user = await connection('user')
            .where('id', user_id)
            .first();
        if (!user) {
            return res.status(401).json({
                error: 'Operation not permitted.'
            });
        }
    } else {
        return res.status(401).json({
            error: 'Operation not permitted.'
        });
    }
}