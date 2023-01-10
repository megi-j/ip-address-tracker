import "leaflet/dist/leaflet.css";
import marker from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const markerIcon = L.icon({
  iconUrl: marker,
  shadowUrl: markerShadow,
});
type Props = {
  lat: number;
  lng: number;
};
export default function Map(props: Props) {
  return (
    <MapContainer
      style={{
        width: "100%",
        height: "100%",
        marginTop: 0,
        zIndex: 0,
      }}
      key={JSON.stringify([props.lat, props.lng])}
      center={[props.lat, props.lng]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[props.lat, props.lng]} icon={markerIcon}></Marker>
    </MapContainer>
  );
}
