import { HotelData } from "@interfaces/hotel";

const HOTELS_DATA: HotelData[] = [
    {
        drawer: {
            image: '/assets/images/drawer/urban.png',
            title: 'Urban',
            titleImage: '/assets/images/drawer/urban_title.svg',
            description: "Social hub de alta experiencia, para millennials y zetas ejecutivos.",
            services: "Habitaciones VIP · Piscina Climatizada · Salón de eventos · Espacio Coworking · Wifi gratis",
            price: 4560,
        },
        thumbnail: {
            image: '/assets/images/hotels/urban.png',
            titleImage: '/assets/images/hotels/urban_title.svg',
            description: "Social hub de alta experiencia, para millennials y zetas ejecutivos.",
            location: "Arequipa",
            services: [
                "/assets/icons/ic_bed.svg", "/assets/icons/ic_gastronomy.svg", "/assets/icons/ic_activities.svg",
            ],
            backgroundColor: '#3D63A9',
        }
    },
    {
        drawer: {
            image: '/assets/images/drawer/tribe.png',
            title: 'Tribe',
            titleImage: '/assets/images/drawer/tribe_title.svg',
            description: "Exploradores, artistas y emprendedores juntos en un lugar único.",
            services: "Habitaciones VIP · Piscina · Gastronomía Vegana · Wifi gratís",
            price: 3190
        },
        thumbnail: {
            image: '/assets/images/hotels/tribe.gif',
            titleImage: '/assets/images/hotels/tribe_title.svg',
            description: "Hub de exploradores, artistas y profesionales que ven al mundo su verdadero hogar.",
            location: "Arequipa",
            services: [
                "/assets/icons/ic_bed.svg", "/assets/icons/ic_gastronomy.svg", "/assets/icons/ic_activities.svg",
            ],
            backgroundColor: '#ADC22F',
        }
    },
    {
        drawer: {
            image: '/assets/images/drawer/family.png',
            title: 'Family',
            titleImage: '/assets/images/drawer/family_title.svg',
            description: "Vive junto a toda tu familia la mejor experiencia de sus vidas.",
            services: "Habitaciones VIP · Piscina Climatizada · Actividades · Spa · Cancha de golf · Wifi gratis",
            price: 4560
        },
        thumbnail: {
            image: '/assets/images/hotels/family.png',
            titleImage: '/assets/images/hotels/family_title.svg',
            description: "Vive junto a toda tu familia la mejor experiencia de sus vidas.",
            location: "Arequipa",
            services: [
                "/assets/icons/ic_bed.svg", "/assets/icons/ic_gastronomy.svg", "/assets/icons/ic_activities.svg",
            ],
            backgroundColor: '#AA2275',
        }
    }
];


export default HOTELS_DATA;