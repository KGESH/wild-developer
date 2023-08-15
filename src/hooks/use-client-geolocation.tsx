import { useState } from 'react';
import { Location } from '@/components/api/service';

export const useClientGeolocation = () => {
  const [clientLocation, setClientLocation] = useState<Location>();

  const getClientLocation = () => {
    const getGeolocation = () =>
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setClientLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.log(`getCurrentPosition: `, error),
      );

    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then(
        (permission) => {
          if (permission.state === 'denied') return;

          getGeolocation();

          permission.addEventListener('change', (e) => {
            if (permission.state === 'granted') getGeolocation();
          });
        },
        (error) => console.log(`query: `, error),
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  return { clientLocation, getClientLocation };
};
