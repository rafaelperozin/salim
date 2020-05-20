const checkId = require('../../validations/checkId');
const connection = require('../../database/connection');

module.exports = async function (req, res) {
    
    const { id } = req.params;
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

    checkId('user', res, id);

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

}