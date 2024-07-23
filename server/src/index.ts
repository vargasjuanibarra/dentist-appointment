import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './config/dbConfig';
import UserRoutes from './routes/userRoutes';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', UserRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    dbConnect();
})


