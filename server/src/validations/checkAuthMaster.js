require('dotenv').config();

module.exports = function checkAuthMaster(masterAuth, res) {
    if (masterAuth !== process.env.MASTER_CODE) {
        try {
            return res.status(401).json({
                error: 'Operation not permitted.'
            });
        }
        catch (error) {
            return error;
        }
    }
}