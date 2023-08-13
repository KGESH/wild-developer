'use client';

import { useState } from 'react';
import * as ReactGoogleMap from '@react-google-maps/api';
import { usePolylineZoomOut } from '@/hooks/use-polyline-zoomout';
import { Location } from '@/app/(home)/api/service';
import LoadingSpinner from '@/components/map/loading-spinner';

const ownerNickname = 'Wild developer';
const clientNickname = 'You';

const redIcon = 'http://maps.google.com/mapfiles/ms/micons/red.png';
const blueIcon = 'http://maps.google.com/mapfiles/ms/micons/blue.png';

const containerStyle = {
  width: '100%',
  height: '100%',
};

type Props = {
  centerPos: Location;
  ownerPos: Location;
  clientPos?: Location;
  clickedCount: number;
  isButtonClicked: boolean;
  closeLoadingModal: () => void;
};

export default function GoogleMap({
  centerPos,
  ownerPos,
  clientPos,
  clickedCount,
  isButtonClicked,
  closeLoadingModal,
}: Props) {
  const { isLoaded } = ReactGoogleMap.useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  const [googleMap, setGoogleMap] = useState<google.maps.Map>();
  const onLoad = (map: google.maps.Map) => setGoogleMap(map);

  const { isPolylineLoaded, onPolylineLoad } = usePolylineZoomOut({
    googleMap,
    ownerPos,
    clientPos,
    clickedCount,
    closeLoadingModal,
  });

  return isLoaded ? (
    <>
      <div className="w-4/5" style={{ height: `768px` }}>
        <ReactGoogleMap.GoogleMap
          id="google-map"
          mapContainerStyle={containerStyle}
          center={centerPos}
          zoom={6}
          onLoad={onLoad}
          options={{ disableDefaultUI: true }}
        >
          <ReactGoogleMap.MarkerF
            position={ownerPos}
            icon={{
              url: redIcon,
              labelOrigin: new google.maps.Point(0, -10),
            }}
            label={{
              text: ownerNickname,
              color: '#C70E20',
              fontWeight: 'bold',
            }}
          ></ReactGoogleMap.MarkerF>
          {clientPos ? (
            <ReactGoogleMap.MarkerF
              position={clientPos}
              icon={{
                url: blueIcon,
                labelOrigin: new google.maps.Point(0, -10),
              }}
              label={{
                text: clientNickname,
                color: '#0000FF',
                fontWeight: 'bold',
              }}
            ></ReactGoogleMap.MarkerF>
          ) : (
            <></>
          )}
          {clientPos ? (
            <ReactGoogleMap.PolylineF
              onLoad={onPolylineLoad}
              options={{
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2,
                geodesic: true,
              }}
              path={[ownerPos, clientPos]}
            ></ReactGoogleMap.PolylineF>
          ) : (
            <></>
          )}
          {isButtonClicked && !isPolylineLoaded && (
            <ReactGoogleMap.InfoWindowF
              position={centerPos}
              options={{ pixelOffset: new window.google.maps.Size(0, -50) }}
            >
              <LoadingSpinner />
            </ReactGoogleMap.InfoWindowF>
          )}
        </ReactGoogleMap.GoogleMap>
      </div>
    </>
  ) : (
    <></>
  );
}
