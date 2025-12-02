export interface Profile {
  id: number;
  name: string;
  age: number;
  distance: number;
  interests: string[];
  likedYou: boolean;
  bio: string;
  lat?: number;
  lng?: number;
}

export const mockProfiles: Profile[] = [
  {
    id: 1,
    name: "Ana Souza",
    age: 25,
    distance: 80,
    interests: ["Sertanejo", "Dançar"],
    likedYou: true,
    bio: "Amo dançar e conhecer pessoas novas!",
    lat: -23.5505 + (Math.random() - 0.5) * 0.01,
    lng: -46.6333 + (Math.random() - 0.5) * 0.01,
  },
  {
    id: 2,
    name: "Leo Martins",
    age: 28,
    distance: 120,
    interests: ["Eletrônica", "Rock"],
    likedYou: false,
    bio: "DJ nas horas vagas, developer no dia a dia",
    lat: -23.5505 + (Math.random() - 0.5) * 0.015,
    lng: -46.6333 + (Math.random() - 0.5) * 0.015,
  },
  {
    id: 3,
    name: "Marina Alves",
    age: 23,
    distance: 210,
    interests: ["Pop", "Karaokê"],
    likedYou: true,
    bio: "Karaokê é minha terapia 🎤",
    lat: -23.5505 + (Math.random() - 0.5) * 0.02,
    lng: -46.6333 + (Math.random() - 0.5) * 0.02,
  },
  {
    id: 4,
    name: "Rafa Lima",
    age: 27,
    distance: 60,
    interests: ["Samba", "Networking"],
    likedYou: false,
    bio: "Sempre no rolê, bora trocar ideia!",
    lat: -23.5505 + (Math.random() - 0.5) * 0.008,
    lng: -46.6333 + (Math.random() - 0.5) * 0.008,
  },
  {
    id: 5,
    name: "Bianca N.",
    age: 26,
    distance: 310,
    interests: ["Indie", "Cinema"],
    likedYou: false,
    bio: "Cinéfila e apaixonada por música indie",
    lat: -23.5505 + (Math.random() - 0.5) * 0.03,
    lng: -46.6333 + (Math.random() - 0.5) * 0.03,
  }
];

export interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  attendees: number;
  category: string;
  image?: string;
}

export const mockEvents: Event[] = [
  {
    id: 1,
    name: "Networking VIP",
    date: "15 Dez, 20:00",
    location: "Sky Lounge SP",
    attendees: 45,
    category: "Networking"
  },
  {
    id: 2,
    name: "After Work Premium",
    date: "18 Dez, 19:00",
    location: "Rooftop Jardins",
    attendees: 32,
    category: "Social"
  },
  {
    id: 3,
    name: "Jazz Night Elite",
    date: "22 Dez, 21:00",
    location: "Blue Note",
    attendees: 28,
    category: "Música"
  }
];
