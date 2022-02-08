const express = require('express');
const Router = express.Router();
const {response,RESPONSETYPE} = require("../utility/response")
const {check, validationResult } = require('express-validator');
const {createReminder,getReminderById,getRemindersByPredicate}=require("../repository/remainder")








Router.post("/", 
validateReminder(),async(req,res)=>{ 
    var errors = validationResult(req).array()

    if(errors.length != 0){
        response(res,RESPONSETYPE.BAD_REQUEST,errors)
    }
    const reminder = {  user:req.body.user,
                        description:req.body.description,
                        date:req.body.date}
    response(res,RESPONSETYPE.CREATED,await createReminder(reminder));
})




// Router.get("/",async(req,res)=>{ 
//     response(res,RESPONSETYPE.OK,await getRemindersByPredicate());
// })






Router.get("/:id",async(req,res)=>{ 
    const reminder = await getReminderById(req.params.id);
    if(!reminder)response(res,RESPONSETYPE.NOTFOUND,"Reminder not found.");

    response(res,RESPONSETYPE.OK,reminder);
})



Router.patch("/:id",async(req,res)=>{
    response(res,RESPONSETYPE.METHOD_NOT_ALLOWED,`reminder ${req.params.id} cannot be modified`);
})
Router.put("/:id",async(req,res)=>{
    response(res,RESPONSETYPE.METHOD_NOT_ALLOWED,`reminder ${req.params.id} cannot be modified`);
})
Router.delete("/:id",async(req,res)=>{
    response(res,RESPONSETYPE.METHOD_NOT_ALLOWED,`reminder ${req.params.id} cannot be deleted`);
})


module.exports = Router 



function validateReminder(){
    return [  check('user', 'User is required'),
            check('description', 'Description is required'),
            check('date', 'Date is required').isISO8601(),
]
}