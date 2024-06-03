import express from 'express'

const EventDelete = express.Router()

EventDelete.delete('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).send();
        }
        res.status(200).send(event);
    } catch (error) {
        res.status(500).send(error);
    }
})

export default EventDelete