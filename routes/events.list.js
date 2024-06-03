import express from 'express'

const EventList = express.Router()

EventList.get('/', async (req, res) => {
    try {
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;

        const events = await Event.find({
            date: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            }
        });

        res.status(200).send(events);
    } catch (error) {
        res.status(500).send(error);
    }
})

export default EventList