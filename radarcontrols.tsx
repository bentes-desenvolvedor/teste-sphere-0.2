import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { List, Map } from "lucide-react";

interface RadarControlsProps {
  radius: number;
  onRadiusChange: (value: number[]) => void;
  viewMode: "lista" | "mapa";
  onViewModeChange: (mode: "lista" | "mapa") => void;
  nearbyCount: number;
}

export function RadarControls({ 
  radius, 
  onRadiusChange, 
  viewMode, 
  onViewModeChange,
  nearbyCount 
}: RadarControlsProps) {
  return (
    <Card className="bg-gradient-card backdrop-blur-xl border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Controles do Radar</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Raio de busca</span>
            <span className="text-sm font-semibold text-primary">{radius}m</span>
          </div>
          <Slider
            value={[radius]}
            onValueChange={onRadiusChange}
            min={50}
            max={500}
            step={10}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            {nearbyCount} {nearbyCount === 1 ? "pessoa encontrada" : "pessoas encontradas"}
          </p>
        </div>

        <div className="space-y-2">
          <span className="text-sm text-muted-foreground">Visualização</span>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "lista" ? "default" : "outline"}
              className={viewMode === "lista" ? "bg-gradient-primary flex-1" : "flex-1"}
              onClick={() => onViewModeChange("lista")}
            >
              <List className="w-4 h-4 mr-2" />
              Lista
            </Button>
            <Button
              variant={viewMode === "mapa" ? "default" : "outline"}
              className={viewMode === "mapa" ? "bg-gradient-primary flex-1" : "flex-1"}
              onClick={() => onViewModeChange("mapa")}
            >
              <Map className="w-4 h-4 mr-2" />
              Mapa
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
