'use client';
import { useState } from 'react';
import * as ReactGoogleMap from '@react-google-maps/api';
import { usePolylineZoomOut } from '@/hooks/use-polyline-zoomout';
import { Location } from '@/components/api/service';
import MapInfoLoadingSpinner from '@/components/map/map-info-loading-spinner';
import MapLoadingSpinner from '@/components/map/map-loading-spinner';
import DistanceInfoWindow from '@/components/map/distance-info-window';

const ownerNickname = 'Wild Developer';
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
    libraries: ['geometry'],
  });
  const [googleMap, setGoogleMap] = useState<google.maps.Map>();
  const onLoad = (map: google.maps.Map) => setGoogleMap(map);

  const { isPolylineLoaded, isDistanceInfoLoaded, onPolylineLoad, distanceKm } = usePolylineZoomOut({
    googleMap,
    ownerPos,
    clientPos,
    clickedCount,
    closeLoadingModal,
  });

  return isLoaded ? (
    <div className="w-2/3" style={{ height: `768px` }}>
      <ReactGoogleMap.GoogleMap
        id="google-map"
        mapContainerStyle={containerStyle}
        center={centerPos}
        zoom={6}
        onLoad={onLoad}
        options={{ disableDefaultUI: true }}
      >
        {/*Owner Marker*/}
        <ReactGoogleMap.MarkerF
          position={ownerPos}
          icon={{
            url: redIcon,
            labelOrigin: new google.maps.Point(15, -10),
          }}
          label={{
            text: ownerNickname,
            color: '#C70E20',
            fontWeight: 'bold',
          }}
        ></ReactGoogleMap.MarkerF>

        {/*Client Marker*/}
        {clientPos ? (
          <ReactGoogleMap.MarkerF
            position={clientPos}
            icon={{
              url: blueIcon,
              labelOrigin: new google.maps.Point(15, -10),
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

        {/*Owner & client between polyline*/}
        {clientPos ? (
          <ReactGoogleMap.PolylineF
            onLoad={onPolylineLoad}
            options={{
              strokeColor: '#FF0000',
              strokeOpacity: 1.0,
              strokeWeight: 2,
            }}
            path={[ownerPos, clientPos]}
          ></ReactGoogleMap.PolylineF>
        ) : (
          <></>
        )}

        {/*Polyline info message*/}
        {/*{isPolylineLoaded && clientPos && (*/}
        {/*  <DistanceInfoWindow distanceKm={distanceKm} ownerPos={ownerPos} clientPos={clientPos} />*/}
        {/*)}*/}

        {/*Polyline Loading spinner*/}
        {isButtonClicked && !isPolylineLoaded && <MapInfoLoadingSpinner centerPos={centerPos} />}
      </ReactGoogleMap.GoogleMap>
    </div>
  ) : (
    // Display when google map loading ...
    <div className="w-2/3" style={{ height: `768px` }}>
      <MapLoadingSpinner />
    </div>
  );
}
