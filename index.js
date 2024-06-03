import express from 'express'
import connectDB from './config/db.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import EventList from './routes/events.list.js';
import EventEdit from './routes/event.edit.js';
import EventCreate from './routes/event.create.js';
import EventDelete from './routes/events.delete.js';


// connect to database
connectDB()

const app = express()
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/events', EventList)
app.use('/api/v1/events/create', EventCreate)
app.use('/api/v1/events/edit', EventEdit)
app.use('/api/v1/events/delete', EventDelete)


// start the server
app.listen(port, () => console.log(`server started at ${port}`))