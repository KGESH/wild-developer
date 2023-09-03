'use client';

import React, { useEffect, useState } from 'react';
import { Location } from '@/components/api/service';
import { cn } from '@/utils/tailwind-merge';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import timezonePlugin from 'dayjs/plugin/timezone';
import { useOwnerTimezone } from '@/hooks/use-owner-timezone';

dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);

type Props = { location: Location };
export default function OwnerClock({ location }: Props) {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const { timezone } = useOwnerTimezone({ location });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [location, timezone]);

  return (
    <div>
      <h3 className={cn(`text-4xl text-gray-50`)}>Current Time in {timezone}</h3>
      <p className={cn(`text-4xl text-gray-50`)}>UTC: {`${currentTime}`}</p>
      <p className={cn(`text-4xl text-gray-50`)}>TZ: {`${currentTime.utcOffset()}`}</p>
    </div>
  );
}
