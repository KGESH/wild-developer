import { getLatestLocation } from '@/app/(home)/api/service';

export const revalidate = 1; // revalidate the data at most every hour

type Location = {
  lat: number;
  lng: number;
};
export default async function Contact() {
  const location = (await getLatestLocation()) as Location;

  return location ? (
    <div>
      <h1 className="text-7xl font-semibold text-gray-100 mb-4">Lat: {location.lat}</h1> {/*I'm*/}
      <h2 className="text-4xl font-semibold text-blue-500 mb-4">Lng: {location.lng}</h2>
      <p className="text-xl text-gray-100 mb-4">{JSON.stringify(location)}</p>
    </div>
  ) : (
    <></>
  );
}
