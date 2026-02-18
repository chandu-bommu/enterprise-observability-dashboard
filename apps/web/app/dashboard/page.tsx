import { Sensor } from '@packages/types';

async function getSensors(): Promise<Sensor[]> {
  const res = await fetch('http://localhost:4000/api/sensors', {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch sensors');
  }

  return res.json();
}

export default async function DashboardPage() {
  const sensors = await getSensors();

  return (
    <main style={{ padding: '24px' }}>
      <h1>Enterprise Dashboard</h1>

      <ul>
        {sensors.map(sensor => (
          <li key={sensor.id}>
            <strong>{sensor.name}</strong> — {sensor.location} (
            {sensor.status})
          </li>
        ))}
      </ul>
    </main>
  );
}

