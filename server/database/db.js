
import mongoose from "mongoose";

const Connection = () => {

    mongoose.connect('mongodb://localhost/Mail')
        .then(() => {
            console.log("Database connection done")
        }).catch(() => {
            console.log("Error while connecting with the database");
        })

}

export default Connection;