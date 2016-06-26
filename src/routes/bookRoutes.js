var express = require('express');

var bookRouter = express.Router();

var router = function(nav){
  var books = [
    {
      title: 'Tartine Bread',
      author: 'Baker McBaked',
      genre: 'Cooking',
      read: false
    },
    {
      title: 'A Kitchen in France',
      author: 'Mimi Thorissen',
      genre: 'Cooking',
      read: false
    },
    {
      title: 'The Brother Karamazov',
      author: 'Fyodor Dostoyevsky',
      genre: 'Historical Fiction',
      read: false
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      read: true
    },
    {
      title: 'The Negative',
      author: 'Ansel Adams',
      genre: 'Photography',
      read: true
    }
  ];

  bookRouter.route('/')
    .get(function(req, res){
      res.render('booksListView', {
          title: 'Books',
          nav: nav,
          books: books
        });
    });
  bookRouter.route('/:id')
    .get(function(req, res){
      var id = req.params.id;
      res.render('bookView', {
          title: 'Books',
          nav: nav,
          book: books[id]
        });
    });
    return bookRouter;
};

module.exports = router;
