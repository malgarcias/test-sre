module.exports = (app) => {
    const people = require('../controllers/user.controller.js');
    // Create a new person
    app.get('/user/:id/:pwd', user.login);


}