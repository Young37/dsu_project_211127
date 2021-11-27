var express = require('express');
var router = express.Router();
const UserService = require('./user.service');


router.post('/', async(req, res) => {
    try{
        const result = await UserService.insertUser(req.body);
        res.status(200).json({status: 200, data: req.body, message:'Success'});
    }catch(error){
        return res.status(500).json({status:500,message:error});
    }
});
/* GET home page. */
router.get('/', async(req, res) => {
    try{
        const result = await UserService.getUserList();
        res.status(200).json({status: 200, data: result, message:'Success'});
    }catch(error){
        return res.status(500).json({status:500,message:error});
    }
});

module.exports = router;