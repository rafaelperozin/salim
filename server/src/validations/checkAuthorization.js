const connection = require('../database/connection');
const errorMessages = require('../utils/errorMessages');

const AccessDeniedMessage = errorMessages.global.access_denied.message;
const AccessDeniedCode = errorMessages.global.access_denied.code;

module.exports = async function checkAuthorization(user_id, res) {
    if (user_id) {        
        const user = await connection('user')
            .where('id', user_id)
            .first();
        if (!user) {
            return res.status(AccessDeniedCode).json({
                error: AccessDeniedMessage
            });
        }
    } else {
        return res.status(AccessDeniedCode).json({
            error: AccessDeniedMessage
        });
    }
}