const generateUniqueId = require('../../utils/generateUniqueId');
const connection = require('../../database/connection');
const errorMessages = require('../../utils/errorMessages');

const duplicatedMessage = errorMessages.users.duplicated.message;
const duplicatedCode = errorMessages.users.duplicated.code;

module.exports = async function (req, res) {

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
        return res.status(duplicatedCode).json({
            error: duplicatedMessage
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

}