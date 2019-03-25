//require express library
var express = require('express');
//require the express router
var router = express.Router();
//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo

/* GET home page. */
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,DIR)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

var upload = multer({ storage: storage })


router.get('/', function(req, res, next) {
// render the index page, and pass data to it.
  res.render('index', { title: 'Express' });
});

//our file upload function.
router.post('/',upload.single('photo'),function (req, res, next) {
     var path = '';
     if(!req.file) {
       res.send('file not received');
     }
       // No error occured.
        path = req.file.path;
        return res.send("Upload Completed for "+path); 
     
})
module.exports = router;