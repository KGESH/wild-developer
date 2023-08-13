'use client';

import GoogleMap from '@/components/map/google-map';
import { Location } from '@/components/api/service';
import { useState } from 'react';
import { useClientGeolocation } from '@/hooks/use-client-geolocation';
import StyledButton from '@/components/button/styled-button';

type Props = {
  ownerLocation: Location;
};
export default function GoogleMapWithMarkers({ ownerLocation }: Props) {
  const { clientLocation, getClientLocation } = useClientGeolocation();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [clickedCount, setClickedCount] = useState(0);

  const onFindMeClick = () => {
    getClientLocation();
    setIsButtonClicked(true);
    setClickedCount(clickedCount + 1);
  };
  const closeLoadingModal = () => setIsButtonClicked(false);

  return (
    <>
      {/*<button className="w-60 h-52 bg-amber-500" onClick={onFindMeClick}>*/}
      {/*  find me*/}
      {/*</button>*/}
      <StyledButton className="mb-5" onClick={onFindMeClick}>
        🌎 Find me
      </StyledButton>
      <GoogleMap
        isButtonClicked={isButtonClicked}
        closeLoadingModal={closeLoadingModal}
        clickedCount={clickedCount}
        centerPos={ownerLocation}
        ownerPos={ownerLocation}
        clientPos={clientLocation}
      ></GoogleMap>
    </>
  );
}
