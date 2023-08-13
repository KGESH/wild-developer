import * as ReactGoogleMap from '@react-google-maps/api';
import { Location } from '@/components/api/service';

type Props = { centerPos: Location };

export default function MapInfoLoadingSpinner({ centerPos }: Props) {
  return (
    <ReactGoogleMap.InfoWindowF position={centerPos} options={{ pixelOffset: new window.google.maps.Size(0, -50) }}>
      <div className="flex flex-col justify-center items-center w-full h-full overflow-hidden">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 mb-4"></div>
        <div className="text-center text-gray-500 w-32">I will find you</div>
        <style jsx>{`
          .loader {
            border-top-color: #3498db; // Color of the spinner, you can change it
            animation: spin 1s linear infinite;
            width: 32px;
            height: 32px;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          // For devices with width up to 768px (generally mobile devices)
          @media (max-width: 768px) {
            .loader {
              width: 24px;
              height: 24px;
            }
          }

          // For devices with width more than 768px (generally desktop and tablets)
          @media (min-width: 769px) {
            .loader {
              width: 48px;
              height: 48px;
            }
          }
        `}</style>
      </div>
    </ReactGoogleMap.InfoWindowF>
  );
}
