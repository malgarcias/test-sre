module.exports = (app) => {
    const user = require('../controllers/user.controller.js');
    // Create a new person
    app.post('/login', user.login);


}