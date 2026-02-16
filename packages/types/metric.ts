export type MetricType =
  | 'temperature'
  | 'pressure'
  | 'vibration'
  | 'humidity';

export interface Metric {
  id: string;
  sensorId: string;
  type: MetricType;
  value: number;
  unit: string;
  timestamp: string; // ISO 8601
}
