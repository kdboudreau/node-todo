var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos/:uname', function(req, resp) {
        Todos.find({ username: req.params.uname },
        function(err, todos) {
            if (err) throw err;
            resp.send(todos);
        });
    });

    app.get('//api/todo/:id', function(req, resp) {
        Todos.findById( { _id: req.params.id }, 
        function(err, todo) {
            if (err) throw err;
            resp.send(todo);
        });
    });

}