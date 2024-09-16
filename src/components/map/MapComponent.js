import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
export const MapComponent = () => {
    const defaultCenter = [55.731244, 37.818423]; // Москва

    return (
        <MapContainer center={defaultCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={defaultCenter}>
                <Popup>
                    Балетная студия.
                </Popup>
            </Marker>
        </MapContainer>
    );
}