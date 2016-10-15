var express = require ('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://bambang:bambang@ds041939.mlab.com:41939/meantodosapp', ['todos'])

//Get All Todos
router.get('/todos', function (req, res, next) {
    db.todos.find(function (err, todos) {
        if(err){
            res.send(err);
        }else{
           res.json(todos);
        }
    });
});

//Get Single Todo
router.get('/todo/:id', function (req, res, next) {
    db.todos.findOne({
        _id: mongojs.ObjectId(req.params.id)
    },function (err, todo) {
        if(err){
            res.send(err);
        }else{
            res.json(todo);
        }
    });
});

module.exports = router;

