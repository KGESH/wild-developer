import type { Metadata } from 'next';
import GoogleMapWithMarkers from '@/components/map/google-map-wrapper';
// import OwnerClock from '@/components/clock/owner-clock';
import { getLatestLocation } from '@/components/api/service';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Wild developer home page',
};

export const revalidate = 0;

const getLocation = async () => {
  return await getLatestLocation();
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const myLastLocation = await getLocation();

  return (
    <main className="flex flex-col items-center">
      {children}
      <GoogleMapWithMarkers ownerLocation={myLastLocation} />
      {/*<OwnerClock location={myLastLocation} />*/}
    </main>
  );
}
