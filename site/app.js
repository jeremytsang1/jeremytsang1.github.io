// ----------------------------------------------------------------------------
// ***** Setup code *****

let express = require('express');

let app = express();

let handlebars = require('express-handlebars').create({defaultLayout: 'main'});

let bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));
// ----------------------------------------------------------------------------
// ***** Routes *****

// -------------------------------------
// Home page
app.get('/', (req, res) => {
  res.render('home');
});

// -------------------------------------
// Projects page
app.get('/projects', (req, res) => {
  res.render('projects');
});

// -------------------------------------
// About page
app.get('/about', (req, res) => {
  res.render('about');
});

// -------------------------------------
// Contact page
app.get('/contact', (req, res) => {
  res.render('contact');
});

// ----------------------------------------------------------------------------
// ***** Error handlers *****
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

app.use(function(error, req, res, next) {
  console.error(error.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

// ----------------------------------------------------------------------------
// ***** Event listener to listen for requests *****

// process.env.HOSTNAME was taken from Greg Healy Video
// https://www.youtube.com/watch?v=sw6rcXZiRos&feature=youtu.be

app.listen(app.get('port'), function() {
  console.log(
    'Express started on http://'
        + `${process.env.HOSTNAME}:${app.get('port')}`
        + '; press Ctrl-C to terminate.'
  );
});
