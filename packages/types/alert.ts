export type AlertSeverity = 'low' | 'medium' | 'high';

export interface Alert {
  id: string;
  metricId: string;
  sensorId: string;
  severity: AlertSeverity;
  message: string;
  triggeredAt: string; // ISO 8601
  acknowledged: boolean;
}
