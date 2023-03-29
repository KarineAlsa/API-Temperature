const temperatureService = require('../services/temperatureService.js');

const temperaturetoPatient = async (req, res) => {
    let result = null;
    try {
        result = await temperatureService.temperatureService(req.body);
        if (result.status) {
            res.send({"status": true, "message": result.msg});
        } else {
            res.send({"status": false, "message": result.msg});
        }

    } catch (error) {

        res.send({"status": false, "message": error.msg});
    }
};

module.exports = { temperaturetoPatient};


