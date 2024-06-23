const express = require('express');
const {ServerConfig, Logger} = require('./config');
const apiroutes = require('./routes');
const serverConfig = require('./config/server-config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api', apiroutes);

app.listen(serverConfig.PORT, async ()=> {
    console.log(`Successfully started the server on port : ${serverConfig.PORT}`);
    const {City, Airport}  = require('./models')
    // const city = await City.findByPk(1);
    // await city.createAirport({name: 'Pune International Airport', code: 'PNQ'});
    // await City.destroy({
    //     where: {
    //         id: 1
    //     }
    // })
})