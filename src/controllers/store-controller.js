const StoreDBA=require('../mongodb/models/store');
const responseHandler=require('../utils/responsehandler');

exports.getStoreDetails=(req,res)=>{
    const id=req.params.id;
    return StoreDBA.findById(id)
        .then(StoreDBAResponse=>{
            console.log(StoreDBAResponse);
            res.send(StoreDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            responseHandler.errorResponse(req,res,'Internal server error',500);
        })
}


exports.updateStore=(req,res)=>{
    const store=req.body;
    const storeId=store._id;
    delete store._id;
    return StoreDBA.findByIdAndUpdate({_id:storeId},store)
        .then(StoreDBAResponse=>{
            console.log(StoreDBAResponse);
            res.send(StoreDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            responseHandler.errorResponse(req,res,'Internal server error',500);
        })
}


exports.createStore=(req,res)=>{
    const Store=req.body;
    delete Store.id;
    delete Store.created_at;
    delete Store.updated_at;
    return StoreDBA.create(Store)
        .then(StoreDBAResponse=>{
            console.log(StoreDBAResponse);
            res.send(StoreDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            responseHandler.errorResponse(req,res,'Internal server error',500);
        })
}

exports.enumerateStores=(req,res)=>{
    return StoreDBA.find()
        .then(StoreDBAResponse=>{
            console.log(StoreDBAResponse);
            res.send(StoreDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            responseHandler.errorResponse(req,res,'Internal server error',500);
        })
}

exports.removeStore=(req,res)=>{
    const storeId=req.params.id;
    StoreDBA.deleteOne({_id:storeId})
    .then(response=>{
         res.send({message:"Deleted sucessfully"});
     })
     .catch(err=>{
         console.log(err)
         responseHandler.errorResponse(req,res,'Internal server error',500);
     })
}