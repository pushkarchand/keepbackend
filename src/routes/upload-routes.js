const router = require('express')['Router']();
const upload=require('../utils/storage');
const responseHandler=require('../utils/responsehandler');
router.post('/',upload.upload,(req,res)=>{
    if(req.file){
        let url=`http://localhost:3000/uploads/${req.file.filename}`;
        responseHandler.successResponse(req,res,url,200);
    } else{
        responseHandler.error(req,res,'error while uploading fiel',500);
    }
});

module.exports = router;
