import type { Metadata } from 'next';
import { getLatestLocation, Location } from '@/components/api/service';
import GoogleMapWithMarkers from '@/components/map/google-map-wrapper';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Wild developer home page',
};

const getLocation = async () => {
  return await getLatestLocation();
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const myLastLocation = await getLocation();

  return (
    <main className="flex flex-col items-center">
      {children}
      <GoogleMapWithMarkers ownerLocation={myLastLocation} />
    </main>
  );
}
