import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { ProfileCard } from "@/components/ProfileCard";
import { RadarMap } from "@/components/RadarMap";
import { RadarControls } from "@/components/RadarControls";
import { mockProfiles, Profile } from "@/lib/mockData";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function Radar() {
  const [radius, setRadius] = useState(200);
  const [viewMode, setViewMode] = useState<"lista" | "mapa">("lista");
  const [likes, setLikes] = useState<Record<number, boolean>>({});
  const userCenter: [number, number] = [-23.5505, -46.6333]; // São Paulo

  const nearbyProfiles = useMemo(() => {
    return mockProfiles
      .filter(p => p.distance <= radius)
      .sort((a, b) => a.distance - b.distance);
  }, [radius]);

  const handleLike = (profileId: number) => {
    setLikes(prev => {
      const newLikes = { ...prev, [profileId]: !prev[profileId] };
      if (newLikes[profileId]) {
        toast.success("Curtida enviada!", {
          description: "A pessoa será notificada sobre seu interesse."
        });
      }
      return newLikes;
    });
  };

  const handleChat = (profile: Profile) => {
    toast.info(`Chat com ${profile.name}`, {
      description: "Funcionalidade de chat será implementada em breve!"
    });
  };

  const handleReport = (profile: Profile) => {
    toast.warning("Denúncia registrada", {
      description: "Obrigado por manter a comunidade segura."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Radar VIP
          </h1>
          <p className="text-muted-foreground">
            Descubra pessoas incríveis próximas a você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <RadarControls
              radius={radius}
              onRadiusChange={(value) => setRadius(value[0])}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              nearbyCount={nearbyProfiles.length}
            />
          </div>

          <div className="lg:col-span-2 space-y-4">
            {viewMode === "lista" ? (
              nearbyProfiles.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-muted-foreground">
                    Nenhuma pessoa encontrada neste raio.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Tente aumentar o raio de busca.
                  </p>
                </motion.div>
              ) : (
                nearbyProfiles.map((profile, index) => (
                  <motion.div
                    key={profile.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProfileCard
                      profile={profile}
                      isLiked={likes[profile.id]}
                      onLike={handleLike}
                      onChat={handleChat}
                      onReport={handleReport}
                    />
                  </motion.div>
                ))
              )
            ) : (
              <RadarMap
                profiles={nearbyProfiles}
                radius={radius}
                center={userCenter}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
