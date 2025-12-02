import { Profile } from "@/lib/mockData";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Heart, MessageCircle, Flag } from "lucide-react";
import { motion } from "framer-motion";

interface ProfileCardProps {
  profile: Profile;
  isLiked?: boolean;
  onLike: (id: number) => void;
  onChat: (profile: Profile) => void;
  onReport: (profile: Profile) => void;
}

export function ProfileCard({ profile, isLiked, onLike, onChat, onReport }: ProfileCardProps) {
  const initials = profile.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gradient-card backdrop-blur-xl border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-foreground">
              {profile.name}, {profile.age}
            </CardTitle>
            <span className="text-sm text-muted-foreground">~{profile.distance}m</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-glow">
              {initials}
            </div>
            
            <div className="flex-1 space-y-3">
              <p className="text-sm text-muted-foreground">{profile.bio}</p>
              
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <Badge 
                    key={interest} 
                    variant="secondary"
                    className="bg-secondary/50 text-secondary-foreground"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  variant={isLiked ? "default" : "outline"}
                  className={isLiked ? "bg-gradient-primary" : ""}
                  onClick={() => onLike(profile.id)}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                  {isLiked ? "Curtido" : "Curtir"}
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onChat(profile)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat
                </Button>
                
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onReport(profile)}
                >
                  <Flag className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
