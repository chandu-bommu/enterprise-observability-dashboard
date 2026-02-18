import { Router } from 'express';
import { getSensors } from '../controllers/sensorController';

const router = Router();

router.get('/sensors', getSensors);

export default router;
