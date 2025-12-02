import { motion } from "framer-motion";
import logoVip from "@/assets/logo-vip.jpeg";

export function VipLogo() {
  return (
    <motion.div 
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img 
          src={logoVip} 
          alt="VIP Sphere" 
          className="w-12 h-12 rounded-full object-cover shadow-glow"
        />
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-glow"></div>
      </div>
      <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
        VIP SPHERE
      </span>
    </motion.div>
  );
}
