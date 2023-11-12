import express from 'express';
import cors from 'cors'
import userRoutes from './routes/user';
import availabilityRoutes from './routes/available';

const app = express();

app.use(cors())
app.use(express.json());


app.use('/api', userRoutes);
app.use('/api', availabilityRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;