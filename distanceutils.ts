export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3; // Earth radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export function approxLatLngAroundCenter(
  center: [number, number], 
  distanceMeters: number, 
  idSeed: number
): [number, number] {
  const bearing = (idSeed * 137) % 360;
  const rad = (bearing * Math.PI) / 180;
  const dN = Math.cos(rad) * distanceMeters;
  const dE = Math.sin(rad) * distanceMeters;
  const mLat = 111111;
  const mLon = 111111 * Math.cos((center[0] * Math.PI) / 180);
  return [center[0] + dN / mLat, center[1] + dE / mLon];
}
