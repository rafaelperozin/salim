const generateUniqueId = require('../../utils/generateUniqueId');
const connection = require('../../database/connection');

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

}