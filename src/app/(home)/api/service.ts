import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export type Location = {
  lat: number;
  lng: number;
};

export const getLatestLocation = async () => {
  const supabase = createServerActionClient({ cookies });
  const { data: location } = await supabase
    .from('locations')
    .select()
    .limit(1)
    .order('created_at', { ascending: false })
    .single();

  return location;
};

export const createLocation = async (location: Location) => {
  const supabase = createServerActionClient({ cookies });
  const { data } = await supabase.from('locations').insert(location);
  return data;
};
