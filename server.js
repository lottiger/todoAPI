import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const mongoUri = process.env.MONGO_URI

const dbConnect = async () => {
  try {
  if (!mongoUri) throw new Error('Mongo uri is required, see env')
    const db = await mongoose.connect(mongoUri)
    console.log('DB connected');
  } catch (err) {
    console.log(err.message)
    process.exit(0)
  }
}

export default dbConnect



