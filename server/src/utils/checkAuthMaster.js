module.exports = async function checkAuthMaster(masterAuth, res) {
    if (masterAuth !== 'salim') {
        return res.status(401).json({
            error: 'Operation not permitted.'
        });
    }
}