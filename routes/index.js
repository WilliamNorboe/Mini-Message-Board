var express = require('express');
var router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Express', messages: messages });
});

router.post('/new', function(req, res, next) {
  let author = req.body.authorName;
  let newMessage = req.body.newMessage;
  messages.push({text: newMessage, user: author, added: new Date()});
  res.redirect('/');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

module.exports = router;
