const express = require('express')
 const app = express()
 const port = process.env.PORT || 3000
 const path = require('path')

const newsApi=require('./tools/news')

 
 const publicDirectory=path.join(__dirname,"../public")
 app.use(express.static(publicDirectory))
 app.set('view engine', 'hbs');
 const viewsDirectory = path.join(__dirname,'../templates/views')
 app.set('views',viewsDirectory)

 app.get('/index',(req,res)=>{
    
  newsApi((error,Data)=>{
      if(error){
          return res.send({error})
      }
      res.render('index',{
          articles:Data,
          img:Data.urlToImage,
          title:Data.title,
          description:Data.description

      })
//   res.render('index',{
//         articles:newsApis.response.body.articles,
//         img:newsApis.response.body.articles.
//     })
 })
 })


















 
 app.listen(port, () => {
    console.log('Server is running')
  })