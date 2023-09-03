import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      auth: {
        persistSession: false,
      },
    },
  );
  const { data: location } = await supabase
    .from('locations')
    .select()
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  console.log(`GET location`, location);

  return NextResponse.json({ location });
}
