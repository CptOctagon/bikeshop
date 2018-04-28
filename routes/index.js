var express = require('express');
var router = express.Router();
var dataBike = [
{name: "Model BIKO45", url:"/images/bike-1.jpg", price: 679},
{name: "Model ZOOK7", url:"/images/bike-2.jpg", price: 799},
{name: "Model LIKO89", url:"/images/bike-3.jpg", price: 839},
{name: "Model GEWO", url:"/images/bike-4.jpg", price: 1206},
{name: "Model TITAN5", url:"/images/bike-5.jpg", price: 989},
{name: "Model AMIG39", url:"/images/bike-6.jpg", price: 599}
]
var dataCardBike = [];

var passwordValid = "123456"
var emailValid = "grossefoutre@jackyetmichel.com"
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { dataBike:dataBike });
});

router.get('/ index', function(req, res, next) {

  res.render('index', { dataBike:dataBike });
});


router.post('/add-card', function(req, res, next) {
  console.log(req.body);
  dataCardBike.push(req.body);
  res.render('shop', {dataCardBike});
});


router.get('/delete-card', function(req, res, next) {
  console.log(req.query);
  dataCardBike.splice(req.query.position, 1)
  res.render('shop', {dataCardBike});
});

router.post('/update-card', function(req, res, next) {
  console.log(req.body);
  dataCardBike[req.body.position].quantity = req.body.quantity;
  res.render('shop', {dataCardBike});
});

router.get('/login', function(req, res, next) {
  res.render('loginform');
});

router.post('/route', function(req, res, next) {
if (req.body.email == emailValid && req.body.password == passwordValid) {
console.log("good")
res.render('index', {dataBike: dataBike, emailValid, passwordValid})
} else {
console.log("pas good")

res.render('loginform')
 }
});




module.exports = router;
