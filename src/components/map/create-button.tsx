'use client';
import { createLocation } from '@/app/(home)/api/service';

export default function CreateButton() {
  return <button onClick={() => createLocation({ lat: 10.44, lng: 33.1 })}>create data</button>;
}
