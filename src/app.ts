require('dotenv').config()

import config from 'config'
import express from 'express'
import router from './routers'
import connectDb from './utils/connectToDb'
import log from './utils/logger'

const app = express()
const port = config.get("port")


app.use(router)


app.get('/', (req,res)=>{
    res.send("Helloow")
})


app.listen(port, ()=>{
    // console.log(`App started at http://localhost:${port}`);
    log.info(`App started at http://localhost:${port}`);
    connectDb();
})