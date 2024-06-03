import express from 'express'

const EventCreate = express.Router()

EventCreate.post('/', async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).send(event);
    } catch (error) {
        res.status(400).send(error);
    }
})

export default EventCreate