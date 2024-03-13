import mongoose from "mongoose";
import 'dotenv/config'



const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://ibester123:ibester123@cluster0.wtfzuum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(process.env.Meme)
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
