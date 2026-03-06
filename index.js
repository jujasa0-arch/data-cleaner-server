import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://data-cleaner-client-phi.vercel.app',
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: `Hello Kariuki ${PORT}`,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});