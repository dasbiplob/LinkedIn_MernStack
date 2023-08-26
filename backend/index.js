import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routs/soccerRoutes.js';
import cors from 'cors'

const app = express();
const PORT = process.env.port || 4000;

const MONGO_URI= 'mongodb+srv://biplob123:biplob123@soccermern.kcsazhb.mongodb.net/soccerDB?retryWrites=true&w=majority'

app.get('/', (req,res)=>{
    res.send(`Our Soccer Applicaiton is running on ${PORT}`)
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


app.use(cors())
routes(app);


app.listen(PORT, ()=>{
    console.log(`Your soccer server is running on ${PORT}`)
})


mongoose.Promise= global.Promise;
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
console.log(`MongoDB Connected`))
