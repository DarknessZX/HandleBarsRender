const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
  let question = {
    id : 3,
    content : 'cau hoi so 3'
  }
  res.render('question', question);
})

module.exports = router;
