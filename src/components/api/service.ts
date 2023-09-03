import { createClient } from '@supabase/supabase-js';

export type Location = {
  lat: number;
  lng: number;
};

export const getLatestLocation = async () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  );
  const { data: location } = await supabase
    .from('locations')
    .select()
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  return location as Location;
};

export const createLocation = async (location: Location) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  );
  const { data } = await supabase.from('locations').insert(location);
  console.log('createLocation', data);
  return data;
};
