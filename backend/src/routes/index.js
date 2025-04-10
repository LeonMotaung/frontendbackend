import express from 'express';
import { someControllerFunction } from '../controllers/index.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Express Backend!');
});

router.get('/some-endpoint', someControllerFunction);

export default router;