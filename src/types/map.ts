export interface MapLocation {
  id: string;
  name: string;
  district?: string;
  coordinates: [number, number]; // [longitude, latitude]
}
