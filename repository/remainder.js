const {Remainder} = require("../persistence/mysql")


module.exports ={
    getReminderById:async function (reminderId){
        return await Remainder.findOne({where:{"id":reminderId}});
        },
    getReminderByPredicate:async function (obj){
        return await Remainder.findOne({where:obj});
    },
    getRemindersByPredicate:async function (obj){
        return await Remainder.findAll({where:obj});
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