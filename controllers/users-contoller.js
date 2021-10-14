const User = require('../models/user');


module.exports.profile = function(req,res){
    return res.render('userProfile',{
        userName : 'Burhanuddin'
    });
}

module.exports.post = function(req,res){
    return res.end('<h1>Users Post!!</h1>')
}

module.exports.signIn = function(req,res){
    return res.render('signIn');
}

module.exports.signUp = function(req,res){      
    return res.render('signUp');
}

module.exports.create = function(req,res){
    // console.log(req.body.password);
    // console.log(req);
    console.log(req.body);
    return res.redirect('back');
    // res.redirect('back');
    // if( req.body.password != req.body.confirmPassword){
    //     return res.redirect('back');
    // }
    
    // User.findOne({email : req.body.email}, function(err , user){
    //     if(err){
    //         console.log('Error in finding user in Sign-in ');
    //     }
        
    //     if(!user){
    //         User.create(req.body,function(err,user){
    //             if(err){
    //                 console.log('Error in creating a user while sign-in');
    //                 return res.redirect('./users/sign-in');
    //             }
    //         });
    //     }else{
    //         return res.redirect('back');
    //     }
    // });

}