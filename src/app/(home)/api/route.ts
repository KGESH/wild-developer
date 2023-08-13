import { getLatestLocation } from '@/app/(home)/api/service';
import { NextResponse } from 'next/server';

export async function GET() {
  const location = await getLatestLocation();
  return NextResponse.json(location);
}
