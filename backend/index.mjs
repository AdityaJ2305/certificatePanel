import express from 'express'
import mongoose from 'mongoose'
import router from './routes/route.mjs'
import cors from 'cors';
const app = express();
app.use(express.json()) // for parsing application/json
// Connect to MongoDB database using Mongoose ORM

app.use(cors());
mongoose.connect("mongodb+srv://adityajindal:aditya12@studentsdb.dl7ff.mongodb.net/").then(() => {
    console.log('Connected Successfully')
}).catch((err) => {
    console.error(err);
});
app.use('/',router)
app.listen(8000, ()=>{console.log(`Server is running on port 8000`)})