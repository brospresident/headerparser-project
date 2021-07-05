function httpGetPersonalData(req, res) {
    return res.status(200).json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    });
}


module.exports = {
    httpGetPersonalData
}