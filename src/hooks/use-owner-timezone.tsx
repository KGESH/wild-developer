'use client';

import { useEffect, useState } from 'react';
import { Location } from '@/components/api/service';

type Props = {
  location: Location;
};
export const useOwnerTimezone = ({ location: { lat, lng } }: Props) => {
  const [timezone, setTimezone] = useState('America/New_York');

  useEffect(() => {
    (async function () {
      const { data } = await fetch(`/api/timezone?lat=${lat}&lng=${lng}`).then((res) => res.json());
      console.log(`Fetched timezone: ${data}`);
      setTimezone(data as string);
    })();
  }, [timezone]);

  return { timezone };
};
