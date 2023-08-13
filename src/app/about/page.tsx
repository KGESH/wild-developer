import { createLocation } from '@/components/api/service';

function getRandomLatitude() {
  return Math.random() * 180 - 90; // Random number between -90 and 90
}

function getRandomLongitude() {
  return Math.random() * 360 - 180; // Random number between -180 and 180
}

export default async function About() {
  await createLocation({
    lat: getRandomLatitude(),
    lng: getRandomLongitude(),
  });

  return (
    <div>
      <h1 className="text-7xl font-semibold text-gray-100 mb-4">About page</h1> {/*I'm*/}
      <h2 className="text-4xl font-semibold text-blue-500 mb-4">Sample</h2>
      <p className="text-xl text-gray-100 mb-4">This is sample page</p>
    </div>
  );
}
