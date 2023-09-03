import { NextResponse, NextRequest } from 'next/server';
import { getTimezoneByLocation } from '@/components/clock/timezone';

export async function GET(request: NextRequest) {
  const lat = request.nextUrl.searchParams.get('lat');
  const lng = request.nextUrl.searchParams.get('lng');

  if (!(lat && lng)) {
    throw new Error('lat and lng are required');
  }

  const data = await getTimezoneByLocation({ lat: +lat, lng: +lng });

  return NextResponse.json({ data });
}
