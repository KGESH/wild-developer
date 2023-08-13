import { createLocation } from '@/app/(home)/api/service';

function getRandomLatitude() {
  return Math.random() * 180 - 90; // Random number between -90 and 90
}

function getRandomLongitude() {
  return Math.random() * 360 - 180; // Random number between -180 and 180
}

export default async function About() {
  const location = await createLocation({
    lat: getRandomLatitude(),
    lng: getRandomLongitude(),
  });

  console.log(`About: `, location);
  return location ? <p>{location}</p> : <p className="text-xl text-gray-100 mb-4">LOADING ...</p>;
}
