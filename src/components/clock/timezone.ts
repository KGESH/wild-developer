'use server';
import * as GeoTZ from 'geo-tz';
import { Location } from '@/components/api/service';

export const getTimezoneByLocation = async ({ lat, lng }: Location) => {
  return await GeoTZ.find(lat, lng)[0];
};
