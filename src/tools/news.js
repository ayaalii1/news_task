
const request =require('request')
const newsApi=(callback)=>{
const url="https://newsapi.org/v2/top-headlines?country=eg&apiKey=3464d41c12fb439a8b925eb56d5740e7"
    request({url:url,json:true},(error,data)=>{
        if(error){
            callback("unable to connect news server",undefined)
        }
        else if(data.body.message){
            callback(data.body.message,undefined)
        }
        else if (data.body.articles.length == 0)
            callback('no found articles', undefined)
        else{
            callback(undefined,data.body.articles)
        }
    })
}

module.exports=newsApi