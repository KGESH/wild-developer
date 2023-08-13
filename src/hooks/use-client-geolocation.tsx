import { useState } from 'react';
import { Location } from '@/components/api/service';

export const useClientGeolocation = () => {
  const [clientLocation, setClientLocation] = useState<Location>();

  const getClientLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setClientLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  return { clientLocation, getClientLocation };
};
