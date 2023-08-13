'use client';

import { getLatestLocation } from '@/app/(home)/api/service';

export default function GetButton() {
  return (
    <button
      onClick={async () => {
        const location = await getLatestLocation();
        console.log(`Client location: `, location);
      }}
    >
      fetch data
    </button>
  );
}
