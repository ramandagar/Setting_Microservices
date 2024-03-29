const express = require('express')
const { PORT }  = require('./config/ServerConfig')
const bodyParser = require('body-parser')

const {CityRepository} = require('./repository/city-repository');

const setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,()=>{ 

        console.log(`Server starting at ${PORT}`)
        const repo = new CityRepository();
        // repo.createCity({name:"New Delhi"})
        repo.deleteCity(2);
    })
}
setupAndStartServer(); 