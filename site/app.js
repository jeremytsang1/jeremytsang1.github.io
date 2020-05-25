// ----------------------------------------------------------------------------
// ***** Setup code *****

let express = require('express');

let app = express();

let handlebars = require('express-handlebars').create({defaultLayout: 'main'});

let bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3737);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));
// ----------------------------------------------------------------------------
// ***** Routes *****

/**
 * Creates storage for request parameters.
 */
const getRequestParams = (req, res, next) => {
  res.locals.queryData = makeNameValueArray(req.query);
  res.locals.bodyData = makeNameValueArray(req.body);
  next();
};

app.use(getRequestParams);

// -------------------------------------
// ***** GET request route *****
app.get('/', (req, res) => {
  let context = {
    'queryParams': res.locals.queryData,
  };
  res.render('home-get', context);
});

// -------------------------------------
// ***** POST request route *****
app.post('/', (req, res) => {
  let context = {
    'queryParams': res.locals.queryData,
    'bodyParams': res.locals.bodyData,
  };
  res.render('home-post', context);
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

// ----------------------------------------------------------------------------
// ***** Helper functions *****
/**
 * Convert the property name/value pairs into an array of size 2 objects.
 * @param {object} object - object to convert.
 * @return {array} - Array of objects (name/value pairs of the argument).
 */
function makeNameValueArray(object) {
  let params = [];

  for (let name in object) {
    params.push({'name': name, 'value': object[name]});
  }

  return params;
}
