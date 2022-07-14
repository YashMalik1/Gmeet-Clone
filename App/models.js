const redisClient = require("./config/redis");

exports.saveCallId = (key,value) => {
    return new Promise((resolve,reject) => {
        redisClient.SET(key,JSON.stringify(value), "EX", 86400, (err, res)=> { //delete data after 1 day= 86400 sec
            if(err){
                reject(err);
            }
            resolve(res);
        });
    });
};


exports.getCallId = (key) => {
    return new Promise((resolve,reject) => {
        redisClient.GET(key, (err, res)=> {
            if(err){
                reject(err);
            }
            resolve(JSON.parse(res)); //because we stringify in line 5
        });
    });
};