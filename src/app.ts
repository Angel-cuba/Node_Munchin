import express from 'express';
import cors from 'cors'
import userRoutes from './routes/user';
import availabilityRoutes from './routes/available';

const app = express();

app.use((req, res, next) => {
  const allowedOrigins = [
    'https://frolicking-sfogliatella-537655.netlify.app',
    'http://localhost:3000',
  ];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json());


app.use('/api', userRoutes);
app.use('/api', availabilityRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;