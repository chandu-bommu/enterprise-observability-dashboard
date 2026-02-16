export interface Sensor {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'inactive' | 'maintenance';
}
