import { Request, Response } from 'express';
import { getAllSensors } from '../services/sensorService';

export const getSensors = (_req: Request, res: Response) => {
  const data = getAllSensors();
  res.json(data);
};
