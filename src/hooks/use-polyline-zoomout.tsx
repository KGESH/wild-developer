import { Location } from '@/components/api/service';
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
  const [distanceKm, setDistanceKm] = useState('');
  const [isDistanceInfoLoaded, setIsDistanceInfoLoaded] = useState(false);

  const onPolylineLoad = (polyline: google.maps.Polyline) => {
    const showKm = (polylineInMeter: number) => (polylineInMeter / 1000).toFixed(2);
    const locations = polyline.getPath().getArray();
    const polylineInMeter = google.maps.geometry.spherical.computeDistanceBetween(locations[0], locations[1]);

    setIsPolylineLoaded(true);
    setDistanceKm(showKm(polylineInMeter));
    closeLoadingModal();
  };

  useEffect(() => {
    if (clientPos && googleMap && isPolylineLoaded) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(ownerPos);
      bounds.extend(clientPos);
      googleMap.fitBounds(bounds);
      setIsDistanceInfoLoaded(true);
    }
  }, [clientPos, isPolylineLoaded, clickedCount]);

  return { isPolylineLoaded, onPolylineLoad, distanceKm, isDistanceInfoLoaded };
};
