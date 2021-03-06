var express = require('express');
var router = express.Router();
var todo = require('../models/todo');


router.get('/', todo.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id/edit', todo.find, renderEdit);
router.get('/:id', todo.find, renderShow);
router.post('/new', todo.create, redirectShow);
router.delete('/:id', todo.delete, redirectIndex);
router.put('/:id', todo.update, redirectShow);


function renderIndex(req, res){
  var mustacheData = {
    todo: res.locals.todo
  };
  // console.log(mustacheData)
  res.render('./todo/index', mustacheData);
}

function renderShow(req,res){
  var mustacheData = res.locals.todo;
  res.render('./todo/show', mustacheData);
}

function renderEdit(req, res){
  var mustacheData = res.locals.todo;
  res.render('./todo/edit', mustacheData);
}

function renderNew(req, res){
  res.render('./todo/new');
}

function redirectShow(req, res){
  // console.log(req.body);
  res.redirect(`/todo/${res.locals.todo_id}`);
}


function redirectIndex(req,res){
  res.redirect('/todo');
};


module.exports = router;