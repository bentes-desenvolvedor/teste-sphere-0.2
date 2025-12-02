import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Users, Calendar, MapPin, Shield, Crown } from "lucide-react";
import { mockEvents } from "@/lib/mockData";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Radar de Proximidade",
      description: "Encontre pessoas incríveis próximas a você com geofencing avançado"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Eventos Exclusivos",
      description: "Acesso a eventos premium e networking de alto nível"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verificação VIP",
      description: "Membros verificados para conexões autênticas e seguras"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Experiência Premium",
      description: "Interface elegante e recursos exclusivos para membros VIP"
    }
  ];

  const stats = [
    { number: "10k+", label: "Membros VIP" },
    { number: "500+", label: "Eventos Realizados" },
    { number: "95%", label: "Satisfação" },
    { number: "50+", label: "Cidades" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge className="mb-6 bg-gradient-primary text-primary-foreground text-sm px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Experiência VIP em Conexões
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Conecte-se com
            <span className="block bg-gradient-primary bg-clip-text text-transparent animate-shimmer">
              pessoas incríveis
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A plataforma premium para relacionamentos autênticos, eventos exclusivos e networking de alto nível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-lg px-8 shadow-glow"
            >
              Criar Conta Gratuita
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8"
              onClick={() => navigate("/radar")}
            >
              Explorar Radar
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Por que escolher a VIP Sphere?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recursos exclusivos para uma experiência incomparável
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-card backdrop-blur-xl border-border/50 shadow-card hover:shadow-glow transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4 shadow-glow">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Próximos Eventos VIP
          </h2>
          <p className="text-muted-foreground text-lg">
            Experiências exclusivas para membros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-card backdrop-blur-xl border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <Badge className="bg-accent/20 text-accent-foreground w-fit mb-2">
                    {event.category}
                  </Badge>
                  <CardTitle className="text-foreground">{event.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.attendees} participantes</span>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-primary hover:opacity-90">
                    Reservar Ingresso
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-secondary backdrop-blur-xl border-border/50 shadow-glow">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Pronto para começar?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Junte-se à comunidade VIP Sphere e descubra um novo mundo de conexões autênticas
              </p>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 shadow-glow">
                Criar Conta Gratuita
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
