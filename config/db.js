import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017')
        console.log(`Database connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}
export default connectDB