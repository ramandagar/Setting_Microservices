const express = require('express')
const { PORT }  = require('./config/ServerConfig')
const bodyParser = require('body-parser')

const ApiRoutes = require('./routes/index')

const setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes)

    app.listen(PORT,()=>{ 
        console.log(`Server starting at ${PORT}`)
    })
}
setupAndStartServer(); 