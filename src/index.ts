import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';


dotenv.config();

const app = express()
const authRoute = require("./routes/auth.ts")

const  dbURI = `mongodb://${process.env.MONGO_ADDRESS}:${process.env.MONGO_PORT}/authentication`
app.use(express.json())
app.use('/api/auth', authRoute)

mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})

app.listen(2400, () => {console.log("Server started: 2400")})