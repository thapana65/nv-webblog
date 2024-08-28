const UserController = require('./controllers/UserController');

module.exports = (app) => {
    app.get('/users', UserController.index);
    app.get('/user/:userId', UserController.show);
    app.post('/user', UserController.create);
    app.put('/user/:userId', UserController.put);
    app.delete('/user/:userId', UserController.remove);
}