import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaCar } from 'react-icons/fa';

// Custom icon
const carIcon = new L.Icon({
	iconUrl: 'https://cdn-icons-png.flaticon.com/512/744/744465.png',
	iconSize: [32, 32],
	iconAnchor: [16, 32],
	popupAnchor: [0, -32],
});

export default function Map() {
	return (
		<div className="h-full w-full flex flex-col">
			<div className="flex items-center justify-between mb-2">
				<h2 className="font-bold text-lg text-primary">Map</h2>
				<input
					type="text"
					placeholder="Search vehicle, customer, and others"
					className="border rounded px-3 py-1 w-72 text-sm focus:outline-primary"
				/>
			</div>
			<div className="flex-1 rounded overflow-hidden border" style={{ minHeight: 300 }}>
				<MapContainer center={[-6.2146, 106.8451]} zoom={14} style={{ height: '100%', width: '100%' }}>
					<TileLayer
						attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[-6.2146, 106.8451]} icon={carIcon}>
						<Popup>
							<div className="w-56">
								<img src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=cover&w=400&q=80" alt="car" className="w-full h-24 object-cover rounded mb-2" />
								<span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded mb-1">In Use</span>
								<div className="font-semibold">Toyota Avanza 1.5 A/T</div>
								<div className="text-xs text-slate-500">B1234ABC</div>
								<div className="flex items-center gap-2 mt-1">
									<FaCar className="text-primary" />
									<span className="text-xs">Chris</span>
								</div>
								<div className="text-xs text-slate-500 mt-1">0812345678</div>
								<div className="text-xs text-slate-500 mt-1">11 Jan 2021</div>
							</div>
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
}
