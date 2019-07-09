var express = require('express');
var router = express.Router();
//var redis = require('redis');

// var redisConn = redis.createClient({
//   host: 'redis-server',
//   port: 6379
// });

var process = require("process");

// redisConn.on("error", function (err) {
//   console.log("Error " + err);
// });

redisConn.set('visits', 0);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Working' });
  // process.exit(0);
  // redisConn.get('visits', function(err, visits) {
  //   console.log(visits);
  //   res.render('index', { title: 'Express', visitC: visits });
  //   redisConn.set('visits', parseInt(visits, 10) + 1);
  // });
});

module.exports = router;
