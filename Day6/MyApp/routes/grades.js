var express = require('express');
var router = express.Router();
var cors = require('cors');
const { check, validationResult } = require('express-validator/check');
let grades = [{id : 1, name : "Karim", course : "CS572", grade : 95}];
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

/* GET home page. */
router.get('/',cors(corsOptions), function(req, res, next) {
    res.json(grades);
});

router.get('/:id',cors(corsOptions),[
  
    check('id').isNumeric()
  ], function(req, res, next) {
  let id = req.params.id;
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }else{
    let grade = grades.find(x => x.id == id);  
    res.json(grade);
}
  
});

router.post('/',cors(corsOptions), function(req, res, next) {
    grades.push(new Grade(req.body));
    res.json(grades);
});

router.put('/:id',cors(corsOptions),[
   
    check('id').isNumeric()
  ], function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }else{
    gradeIndex = grades.findIndex(obj => obj.id == req.params.id);
    grades[gradeIndex].name = req.body.name;
    grades[gradeIndex].course = req.body.course;
    grades[gradeIndex].grade = req.body.grade;
    res.json(grades);
    }
});

router.delete('/:id',cors(corsOptions),[
 
    check('id').isNumeric()
  ], function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }else{
    let id = req.params.id;
    let grade = grades.find(x => x.id == id);
    var index = grades.indexOf(grade);
    grades.splice(index, 1)
    res.json(grades);
    }
});


function Grade(id, name, course, grade){
    this.id = id;
    this.name = name;
    this.course = course;
    this.grade = grade;
}
module.exports = router;
