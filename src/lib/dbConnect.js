import mongoose from "mongoose";

export async function connectDB(){
    let isconnected = false
    if(isconnected) return "DB is already Connected"
    try {
        let connected = await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB Conect Successfully..")
        if(connected.connection.readyState == 1) isconnected = true
    } catch (error) {
        console.log(err)
    }

}
