const Express= require('express');


const bodyParser = require("./startup/bodyParser");
const {Logger} = require("./utility/logger");
const errorHandler = require("./startup/useErrorHandler");
const {response,RESPONSETYPE} = require("./utility/response");
const errorMiddleware = require("./middleware/exception_middleware");
require('express-async-errors');
require('dotenv').config()


const reminders = require("./routes/remainder")

errorHandler()
const app = Express();
app.use(Express.json());
app.set('port', process.env.PORT || 3000)
bodyParser(app);


app.use("/reminders",reminders);

app.get("/v1/errorlogs",async (req,res,)=>{
    res.sendFile(`${__dirname}/error.log`)
})

app.get('*', function(req, res) {
    response(res,RESPONSETYPE.NOTFOUND,"Path Not Found");
});

app.use(errorMiddleware)

app.listen(app.get('port'), function() {
Logger.info(`server listening on port ${app.get('port')}`)
});