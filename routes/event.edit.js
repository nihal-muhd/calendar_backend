import express from 'express'

const EventEdit = express.Router()

EventEdit.put('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) {
            return res.status(404).send();
        }
        res.status(200).send(event);
    } catch (error) {
        res.status(400).send(error);
    }
})

export default EventEdit