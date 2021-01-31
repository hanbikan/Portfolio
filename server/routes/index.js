const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.json({username:'byena'});
})

module.exports = router;
