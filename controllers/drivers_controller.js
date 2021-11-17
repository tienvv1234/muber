const Driver = require('../models/driver');


module.exports = {
    create(req, res, next) {
        const driverProps = req.body;
        Driver.create(driverProps)
            .then(driver => res.json(driver))
            .catch(next);
    },
    edit(req, res, next) {
        const driverId = req.params.id;
        const driverProps = req.body;
        Driver.findByIdAndUpdate(driverId, driverProps)
            .then(() => Driver.findById(driverId))
            .then(driver => res.json(driver))
            .catch(next);
    },
    delete(req, res, next) {
        const driverId = req.params.id;
        Driver.findByIdAndRemove(driverId)
            .then(() => res.sendStatus(204))
            .catch(next);
    },
    index(req, res, next) {
        Driver.geoNear(
            { type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
            { spherical: true, maxDistance: 200000 } // 200km radius around the point (in meters)
        ).then(drivers => res.json(drivers))
            .catch(next);
    }
};