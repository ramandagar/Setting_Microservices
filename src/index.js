const express = require('express')
const { PORT }  = require('./config/ServerConfig')
const setupAndStartServer = () =>{
    const app = express();
    app.listen(PORT,()=>{ 
        console.log(`Server starting at ${PORT}`)
    })
}
setupAndStartServer();