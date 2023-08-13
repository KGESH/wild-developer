import { Location } from '@/app/(home)/api/service';
import { useEffect, useState } from 'react';

type Props = {
  googleMap?: google.maps.Map;
  ownerPos: Location;
  clientPos?: Location;
  clickedCount: number;
  closeLoadingModal: () => void;
};
export const usePolylineZoomOut = ({ googleMap, ownerPos, clientPos, clickedCount, closeLoadingModal }: Props) => {
  const [isPolylineLoaded, setIsPolylineLoaded] = useState(false);
  const onPolylineLoad = () => {
    setIsPolylineLoaded(true);
    closeLoadingModal();
  };

  useEffect(() => {
    if (clientPos && googleMap && isPolylineLoaded) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(ownerPos);
      bounds.extend(clientPos);
      googleMap.fitBounds(bounds);
    }
  }, [clientPos, isPolylineLoaded, clickedCount]);

  return { isPolylineLoaded, onPolylineLoad };
};
