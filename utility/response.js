const RESPONSETYPE ={
    NOTFOUND:0,
    OK:1,
    BAD_REQUEST:2,
    INTERNAL_SERVER_ERROR:3,
    UNAUTHORIZED:4,
    FORBIDDEN:5 ,
    CONFLICT:6,
    CREATED:7,
    METHOD_NOT_ALLOWED:8
}
Object.freeze(RESPONSETYPE)

const response = (res,responseType,result,message)=>{
    switch (responseType) {
        case RESPONSETYPE.NOTFOUND:
            return res.status(404).send({data:result,message})
        case RESPONSETYPE.OK:
            return  res.status(200).send({data:result})
        case RESPONSETYPE.CREATED:
            return  res.status(201).send({data:result})
        case RESPONSETYPE.BAD_REQUEST:
            return  res.status(400).send({data:result,message})
        case RESPONSETYPE.UNAUTHORIZED:
            return  res.status(401).send({data:result,message})
        case RESPONSETYPE.INTERNAL_SERVER_ERROR:
            return  res.status(500).send({data:result,message}) 
        case RESPONSETYPE.FORBIDDEN:
            return  res.status(403).send({data:result,message}) 
        case RESPONSETYPE.METHOD_NOT_ALLOWED:
            return  res.status(405).send({data:result,message}) 
        case RESPONSETYPE.CONFLICT:
            return  res.status(409).send({data:result,message}) 
        default:
            return  res.status(500).send({data:result,message})
    }
}
module.exports = {
    RESPONSETYPE,
    response
}