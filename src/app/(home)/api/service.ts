import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export type Location = {
  lat: number;
  lng: number;
};

export const getLatestLocation = async () => {
  'use server';

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  );
  const { data: location } = await supabase
    .from('locations')
    .select()
    .limit(1)
    .order('created_at', { ascending: false })
    .single();

  return location;
};

export const createLocation = async (location: Location) => {
  'use server';

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  );
  const { data } = await supabase.from('locations').insert(location);
  console.log('createLocation', data);
  return data;
};
