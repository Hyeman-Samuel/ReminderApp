const {Remainder} = require("../persistence/mysql")
const {Op} = require("../persistence/mysql").Sequelize
module.exports ={
    getReminderById:async function (reminderId){
        return await Remainder.findOne({where:{"id":reminderId}});
        },
    getReminderByPredicate:async function (obj){
        return await Remainder.findOne({where:obj});
    },
    getRemindersByPredicate:async function (user,after){
        
        if(after != null  & user != null){
            const date =new Date(parseInt(after))
            return await Remainder.findAll({where:{user:user ,date: { [Op.gte] :date}}});
        }else if(after){
            const date =new Date(parseInt(after))
            return await Remainder.findAll({where:{date: { [Op.gte] : date}}});
        }else if(user){
            return await Remainder.findAll({where:{"user":user}});
        }else{
            return await Remainder.findAll() 
        }    
    },
    createReminder:async function(reminder){
        const _reminder = await Remainder.create(reminder)
        await _reminder.toJSON();
        return _reminder;
    },
    deleteReminder:async function(reminderId){
        const _reminder = await Remainder.findOne({where:{"id":reminderId}});
        await _reminder.destroy()
    },
    updateReminder:async function(reminderId,reminder){
        const _reminder= await Remainder.findOne({where:{"id":reminderId}});
        _reminder.set(reminder)
    return await _reminder.save()
    }
    
}