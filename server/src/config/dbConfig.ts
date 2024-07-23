import { connect } from 'mongoose';

export const dbConnect = () => {
    connect(process.env.MONGO_URI!)
        .then(() => console.log('connected to database!'))
        .catch((error) => console.log('Error connecting to database'));
}