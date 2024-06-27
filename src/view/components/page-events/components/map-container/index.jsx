import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: -23.55052,
    lng: -46.633308,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBR6oheKu_-vGxxrvmuZLiDFzJGoHmSTgc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
