module.exports.profile = function(req,res){
    return res.render('userProfile',{
        userName : 'Burhanuddin'
    });
}

module.exports.post = function(req,res){
    return res.end('<h1>Users Post!!</h1>')
}