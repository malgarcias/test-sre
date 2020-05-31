module.exports = (app) => {
    const people = require('../controllers/user.controller.js');
    // Create a new person
    app.post('/login', user.login);


}