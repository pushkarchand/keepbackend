const userDBA=require('../mongodb/models/user');
const passwordUtil=require('../utils/password');
const responseHandler=require('../utils/responsehandler');

exports.getUserDetails=(req,res)=>{
    const userId=req.params.customerId;
    return userDBA.findById(userId)
        .then(userDBAResponse=>{
            console.log(userDBAResponse);
            res.send(userDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            responseHandler.errorResponse(req,res,'Internal Server error',500);
        })
}


exports.updateUser=(req,res)=>{
    const userId=req.body.id;
    return userDBA.update({"id":userId})
        .then(userDBAResponse=>{
            console.log(userDBAResponse);
            res.send(userDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            responseHandler.errorResponse(req,res,'Internal Server error',500);
        })
}


exports.createUser=(req,res)=>{
    const user=req.body;
    delete user.id;
    return userDBA.findOne({'emailId':user.emailId})
    .then(uniqueEmailRespose=>{
        if(uniqueEmailRespose){
            res.send({"message":"Email Id is already taken"});
        } else{
            return passwordUtil.encryptPassword(user.password)
            .then(response=>{
                user.password=response;
            })
            .then(()=>{
                return userDBA.create(user)
            })
            .then(userDBAResponse=>{
                console.log(userDBAResponse);
                res.send(userDBAResponse);
            })
        }
    })
    .catch(err=>{
        console.log(err); 
        responseHandler.errorResponse(req,res,'Internal Server error',500);
    })
}

exports.enumerateUsers=(req,res)=>{
    return userDBA.find()
        .then(userDBAResponse=>{
            console.log(userDBAResponse);
            res.send(userDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            responseHandler.errorResponse(req,res,'Internal Server error',500);
        })
}


exports.removeUser=(req,res)=>{
    const userIds=req.params.id.split(',');
   return knex('user')
    .whereIn('id', userIds)
    .del()
    .then(deleteResponse=>{
        res.send(deleteResponse);
    })
    .catch(err=>{
        console.log(err);
        responseHandler.errorResponse(req,res,'Internal Server error',500);
    })
}