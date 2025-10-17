// locations.ts
import locationsData from './locations.json' assert { type: 'json' };

export interface Location {
  id: number;
  name: string;
  addrs: string;
  latitude: number;
  longitude: number;
  borrow: number;
  return: number;
  operate_time: string;
  picture: string;
}

// Импортируем массив из JSON и маппим только нужные поля
export const locations: Location[] = (locationsData.info.sellerList || []).map((loc: any) => ({
  id: loc.id,
  name: loc.name,
  addrs: loc.addrs,
  latitude: loc.latitude,
  longitude: loc.longitude,
  borrow: loc.borrow,
  return: loc.return,
  operate_time: loc.operate_time,
  picture: loc.picture,
}));

// Получить текущее время в GMT+4 (Баку)
export function getBakuTime(): Date {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 3600000 * 4);
}

// Проверка работы локации по operate_time (формат "HH:MM:SS-HH:MM:SS")
export function isLocationOpen(location: Location): boolean {
  if (!location.operate_time) return true;

  const bakuTime = getBakuTime();
  const [startStr, endStr] = location.operate_time.split('-');
  const [startHour, startMinute] = startStr.split(':').map(Number);
  const [endHour, endMinute] = endStr.split(':').map(Number);

  const currentMinutes = bakuTime.getHours() * 60 + bakuTime.getMinutes();
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;

  return endMinutes < startMinutes
    ? currentMinutes >= startMinutes || currentMinutes < endMinutes
    : currentMinutes >= startMinutes && currentMinutes < endMinutes;
}

// Цвет маркера
export function getMarkerColor(location: Location, checkSchedule: boolean = true): string {
  if (checkSchedule && !isLocationOpen(location)) return '#ef4444';
  if (location.borrow === 0 && location.return === 0) return '#9ca3af';
  if (location.borrow > 0 && location.return === 0) return '#22c55e';
  if (location.borrow > 0 && location.return > 0) return '#3b82f6';
  return '#9ca3af';
}

// Интерфейс кластера
export interface LocationCluster {
  id: string;
  latitude: number;
  longitude: number;
  locations: Location[];
  count: number;
}

// Кластеризация
export function clusterLocations(
  locations: Location[],
  zoom: number,
  minDistance: number = 0.01
): (Location | LocationCluster)[] {
  if (zoom >= 14) return locations;

  const clusters: (Location | LocationCluster)[] = [];
  const processed = new Set<number>();
  const distanceThreshold = minDistance * (15 - zoom);

  locations.forEach((loc) => {
    if (processed.has(loc.id)) return;

    const nearby = locations.filter(
      (other) =>
        !processed.has(other.id) &&
        Math.sqrt(Math.pow(loc.latitude - other.latitude, 2) + Math.pow(loc.longitude - other.longitude, 2)) <=
          distanceThreshold
    );

    if (nearby.length > 1) {
      const avgLat = nearby.reduce((sum, l) => sum + l.latitude, 0) / nearby.length;
      const avgLng = nearby.reduce((sum, l) => sum + l.longitude, 0) / nearby.length;
      clusters.push({
        id: `cluster-${nearby.map((l) => l.id).join('-')}`,
        latitude: avgLat,
        longitude: avgLng,
        locations: nearby,
        count: nearby.length,
      });
      nearby.forEach((l) => processed.add(l.id));
    } else {
      clusters.push(loc);
      processed.add(loc.id);
    }
  });

  return clusters;
}

// Проверка кластера
export function isCluster(item: Location | LocationCluster): item is LocationCluster {
  return 'count' in item && 'locations' in item;
}
