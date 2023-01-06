import { config } from "../config";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useCallback, useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef<GoogleMap>();

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: 42.388020214131295,
    lng: -82.94245176441804,
  };

  const label = "Marge's Bar";

  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <MarkerF position={center} label={label} />
    </GoogleMap>
  );
}
