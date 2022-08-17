import { Hotel } from "../interfaces";

const HOTELS_DATA: Hotel[] = [
    {
        image: '/assets/images/drawer/urban.png',
        title: 'Urban',
        titleImage: '/assets/images/drawer/urban_title.svg',
        description: "Social hub de alta experiencia, para millennials y zetas ejecutivos.",
        services: "Habitaciones VIP · Piscina Climatizada · Salón de eventos · Espacio Coworking · Wifi gratis",
        price: 4560,
    },
    {
        image: '/assets/images/drawer/tribe.png',
        title: 'Tribe',
        titleImage: '/assets/images/drawer/tribe_title.svg',
        description: "Exploradores, artistas y emprendedores juntosen un lugar único.",
        services: "Habitaciones VIP · Piscina · Gastronomía Vegana · Wifi gratís",
        price: 3190,
    },
    {
        image: '/assets/images/drawer/family.png',
        title: 'Family',
        titleImage: '/assets/images/drawer/family_title.svg',
        description: "Vive junto a toda tu familia la mejor experiencia de sus vidas.",
        services: "Habitaciones VIP · Piscina Climatizada · Actividades · Spa · Cancha de golf · Wifi gratis",
        price: 4560,
    },
];

export default HOTELS_DATA;