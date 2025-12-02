import { VipLogo } from "./VipLogo";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Header() {
  const navigate = useNavigate();

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <VipLogo />
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigate("/")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => navigate("/radar")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Radar
            </button>
            <button className="text-foreground/80 hover:text-primary transition-colors">
              Eventos
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Entrar
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
