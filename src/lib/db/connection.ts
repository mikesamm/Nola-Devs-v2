import { connect } from 'mongoose';
import { MONGODB_URI } from '$env/dynamic/private';

// setting up the connection to the DB
const connectDB = async () => {
	const dbUri = `${MONGODB_URI}`;

	try {
		await connect(dbUri);
		console.log('Database connected successfully');
	} catch (error) {
		console.error('Database connection failed:', error);
		process.exit(1);
	}
};

export default connectDB;
