const express = require('express')
const { PORT }  = require('./config/ServerConfig')
const bodyParser = require('body-parser')
const ApiRoutes = require('./routes/index')

const db= require('./models/index');
const sequelize = require('sequelize');
const {City} = require('./models/index');
const {Airplane} = require('./models/index');


const setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes)

    app.listen(PORT,async ()=>{ 
        console.log(`Server starting at ${PORT}`)
 
        // await Airplane.create({
        //     modelNumber:'Boing 267'
        // })
        // const airports = Airport.findAll();
        // console.log('airports',airports)
    //   db.sequelize.sync({alter:true})

    // const city = await City.findOne({
    //     where:{
    //         id:15
    //     }
    // })
    // console.log('city',city)
    // const airports = await city.getAirports();
    // console.log('airports are here', airports);
    })
}
setupAndStartServer(); 