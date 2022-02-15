var express = require('express');
var router = express.Router();

router.get ('/',function(request,response)

{

  response.send("I am example");

  console.log("I am example");



});

router.use(
    function(req,res,next){
        console.log('The common middleware called');
        next();
    }
);

router.get('/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);

router.use('/',
    function(req,res,next){
        console.log('The example middleware called');
        next();
    }
);

router.get('/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

router.get('/:firstName&:lastName',
    function(request, response){
       response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

router.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);
module.exports = router;