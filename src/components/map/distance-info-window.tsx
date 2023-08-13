import { Location } from '@/components/api/service';
import * as ReactGoogleMap from '@react-google-maps/api';

type Props = {
  distanceKm: string;
  ownerPos: Location;
  clientPos: Location;
};

export default function DistanceInfoWindow({ distanceKm, ownerPos, clientPos }: Props) {
  const betweenCenterPos = getBetweenPos(ownerPos, clientPos);
  const isMobile = window.innerWidth <= 768;
  // Todo: fix window info bug
  const visible = false;

  return (
    visible &&
    !isMobile && (
      <ReactGoogleMap.InfoWindowF
        position={betweenCenterPos}
        options={{ pixelOffset: new window.google.maps.Size(0, -5) }}
      >
        <div className="text-center">
          <p className="text-gray-500 text-sm sm:text-xs lg:text-lg">We are {distanceKm}️ km apart ✈️</p>
        </div>
      </ReactGoogleMap.InfoWindowF>
    )
  );
}

const getBetweenPos = (ownerPos: Location, clientPos: Location): Location => {
  const lat = (ownerPos.lat + clientPos.lat) / 2;
  const lng = (ownerPos.lng + clientPos.lng) / 2;
  return { lat, lng };
};
