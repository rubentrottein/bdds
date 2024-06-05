function welcome(req, res){
    //res.sendFile('.index.html');
    res.json({message:  "Welcome to the Movies API"});
}

module.exports = { welcome };