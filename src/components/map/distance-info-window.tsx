import { Location } from '@/components/api/service';
import * as ReactGoogleMap from '@react-google-maps/api';

type Props = {
  distanceKm: string;
  ownerPos: Location;
  clientPos: Location;
};

export default function DistanceInfoWindow({ distanceKm, ownerPos, clientPos }: Props) {
  const betweenCenterPos = getBetweenPos(ownerPos, clientPos);

  console.log(betweenCenterPos);

  return (
    <ReactGoogleMap.InfoWindowF
      position={betweenCenterPos}
      options={{ pixelOffset: new window.google.maps.Size(0, 0) }}
    >
      <div className="text-center">
        <p className="text-gray-500 text-sm sm:text-xs lg:text-lg">We are {distanceKm}️ km apart ✈️</p>
      </div>
    </ReactGoogleMap.InfoWindowF>
  );
}

const getBetweenPos = (ownerPos: Location, clientPos: Location) => {
  return google.maps.geometry.spherical.interpolate(
    new google.maps.LatLng(ownerPos),
    new google.maps.LatLng(clientPos),
    0.5,
  );
};
