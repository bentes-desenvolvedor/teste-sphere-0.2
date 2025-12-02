import { useEffect, useRef } from "react";
import { Profile } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface RadarMapProps {
  profiles: Profile[];
  radius: number;
  center: [number, number];
}

export function RadarMap({ profiles, radius, center }: RadarMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView(center, 14);
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add radius circle
    L.circle(center, {
      radius: radius,
      color: "hsl(45 95% 60%)",
      fillColor: "hsl(45 95% 60%)",
      fillOpacity: 0.1,
      weight: 2,
    }).addTo(map);

    // Add user marker (center)
    const userIcon = L.divIcon({
      html: '<div style="background: linear-gradient(135deg, hsl(45 95% 60%), hsl(35 90% 55%)); width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>',
      className: '',
      iconSize: [20, 20],
    });
    L.marker(center, { icon: userIcon }).addTo(map);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [center, radius]);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const map = mapInstanceRef.current;

    // Clear existing markers (except user)
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker && layer.getLatLng().lat !== center[0]) {
        map.removeLayer(layer);
      }
    });

    // Add profile markers
    profiles.forEach((profile) => {
      if (profile.lat && profile.lng && profile.distance <= radius) {
        const markerIcon = L.divIcon({
          html: `<div style="background: linear-gradient(135deg, hsl(280 60% 50%), hsl(260 50% 45%)); width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 8px rgba(0,0,0,0.3);"></div>`,
          className: '',
          iconSize: [16, 16],
        });

        const marker = L.marker([profile.lat, profile.lng], { icon: markerIcon }).addTo(map);
        
        marker.bindPopup(`
          <div style="color: #000;">
            <strong>${profile.name}, ${profile.age}</strong><br/>
            ~${profile.distance}m de distância<br/>
            <small>${profile.interests.join(", ")}</small>
          </div>
        `);
      }
    });
  }, [profiles, radius, center]);

  return (
    <Card className="bg-gradient-card backdrop-blur-xl border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Mapa de Proximidade</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          ref={mapRef} 
          className="w-full h-[400px] rounded-lg overflow-hidden border border-border/50"
        />
        <p className="text-xs text-muted-foreground mt-2">
          Posições aproximadas para privacidade
        </p>
      </CardContent>
    </Card>
  );
}
