import type { Metadata } from 'next';
import { getLatestLocation, Location } from '@/app/(home)/api/service';
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
  const clientLocation: Location = {
    lat: 55,
    lng: 83,
  };

  return (
    <main className="flex flex-col items-center">
      {children}
      <GoogleMapWithMarkers ownerLocation={myLastLocation} />
      {/*<GoogleMap ownerLocation={myLastLocation} clientLocation={clientLocation} />*/}
    </main>
  );
}
