import type { Metadata } from 'next';
import { Location } from '@/app/(home)/api/service';
import GoogleMapWithMarkers from '@/components/map/google-map-wrapper';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Wild developer home page',
};

const getLocation = async () => {
  const res = await fetch('http://localhost:3000/api', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data as Location;
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
