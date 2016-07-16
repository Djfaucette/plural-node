var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
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

var router = function(nav) {

  adminRouter.route('/addBooks')
    .get(function(req, res){
      var url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, function(err, db){
          var collection = db.collection('books');
          collection.insertMany(books, function(err, results){
            res.send(results);
            db.close();
          });
        });
    });

  return adminRouter;

};


module.exports = router;
