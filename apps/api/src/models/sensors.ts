import { Sensor } from '../../../../packages/types';

export const sensors: Sensor[] = [
    {
        id: 'sensor-001',
        name: 'Temperature Sensor A',
        location: 'Plant 1',
        status: 'active',
    },
    {
        id: 'sensor-002',
        name: 'Pressure Sensor B',
        location: 'Plant 2',
        status: 'maintenance',
    }
];