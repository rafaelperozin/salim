const connection = require('../database/connection');
const errorMessages = require('../utils/errorMessages');

const InvalidIdMessage = errorMessages.global.invalid_id.message;
const InvalidIdCode = errorMessages.global.invalid_id.code;
const RequiredIdMessage = errorMessages.global.required_id.message;
const RequiredIdCode = errorMessages.global.required_id.code;

module.exports = async function checkId(db_table, res, id, user_id) {
    if (id) {
        let validId;
        if (user_id) {
            validId = await connection(db_table)
                .where('id', id)
                .andWhere('user_id', user_id)
                .first()
        } else {
            validId = await connection(db_table)
                .where('id', id)
                .first();            
        }
        if (validId == undefined) {
            return res.status(InvalidIdCode).json({
                error: InvalidIdMessage
            });
        }
    } else {
        return res.status(RequiredIdCode).json({
            error: RequiredIdMessage
        });
    }
}