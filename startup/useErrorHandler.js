const {Logger} = require("../utility/logger");


module.exports=function (){
if (process.env.NODE_ENV !== 'production') {
    Logger.SetConsoleLogger()
    }
    
    process.on('unhandledRejection',(ex)=>{
    Logger.error(ex.message,ex)
    })
    
    process.on('uncaughtException',(ex)=>{
    Logger.error(ex.message,ex)
    })
}