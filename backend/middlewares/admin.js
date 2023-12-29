const {Admin} = require('../db');

const adminMiddleware = async (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;

    let value = await Admin.findOne({
        username: username, 
        password: password
    })

    if(value){
        res.status(200).json({
            msg: 'Account Created Successfully'
        })
        next()
    }else{
        res.status(403).json({
            msg: 'Invalid username or password'
        })
    }

}

module.exports = adminMiddleware;