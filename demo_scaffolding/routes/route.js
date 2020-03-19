const express = require('express');
const router = express.Router();
router.use((req,res,next)=>{
    //checking if it has a query param of a
    switch(req.method){
        case 'GET': 
        if(req.query.a){
            console.log('inside get request condition');
        next();
        }else{
            res.send({
                status:'failed',
                description:'there is no a in your param, so not going anywhere'
            });   
    }
    break;
    default:next();break;    
}
});
router.get('/',(req,res)=>{
    // console.log('request keys are',Object.keys(req));
    console.log('req is:',req.query);
    res.send({name:"niharika"});
})
router.post('/',(req,res)=>{
console.log(req.body);
res.send(req.body);
});
module.exports = router;