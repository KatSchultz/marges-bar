import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useCallback, useRef } from "react";

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

  // const label = {
  //   text: "Marge's Bar",
  //   fontWeight: "600",
  //   fontSize: "1.25rem",
  //   color: "black",
  // };

  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      onLoad={onLoad}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}
