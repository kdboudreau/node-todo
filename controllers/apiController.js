var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todo/:uname', function(req, resp) {
        Todos.find({ username: req.params.uname },
        function(err, todos) {
            if (err) throw err;
            resp.send(todos);
        });
    });

    app.get('/api/todo/:id', function(req, resp) {
        Todos.findById( { _id: req.params.id }, 
        function(err, todo) {
            if (err) throw err;
            resp.send(todo);
        });
    });

    app.post('/api/todo', function(req, resp) {
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                    todo: req.body.todo, 
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment 
                },
                function(err, todo) {
                    if (err) throw err;
                    resp.send('Success');
                })
        } else {
            var newTodo = Todos({
                username: 'user1',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function(err) {
                if (err) throw err;
                resp.send('Success');
            });
        }
    });

    app.delete('/api/todo', function(req, resp) {
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            resp.send('Success');
        });
    });
}