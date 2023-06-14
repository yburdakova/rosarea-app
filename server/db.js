import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => console.log(`Could not connect because ${error.message}`));
