const DriversController = require('./controllers/drivers');

module.exports = (app) => {
    // app.get('/api', DriversController);
    app.get('/api/drivers', DriversController.create);
    app.put('/api/drivers/:id', DriversController.update);
    app.delete('/api/drivers/:id', DriversController.delete);
    app.get('/api/drivers', DriversController.index)
};