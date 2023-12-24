import express from 'express';
import dotenv from 'dotenv';

import { 
    notFound,
    errorHandler 
} from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});