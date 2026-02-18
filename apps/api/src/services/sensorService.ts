import { Sensor } from '../../../../packages/types';
import { sensors } from '../models/sensors';

export const getAllSensors = (): Sensor[] => {
  return sensors;
};
