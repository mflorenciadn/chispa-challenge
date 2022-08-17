import { HeroSection, HomeData } from "@interfaces/home";
import HOTELS_DATA from "./hotelsData";

const HERO_SECTIONS: HeroSection[] = [
    {
        title: "Concepto de co-living",
        message: "Tu tribu te espera",
        image: {
            mobile: '/assets/images/hero/mobile2.png',
            desktop: '/assets/images/hero/desktop2.png'
        }
    },
    {
        title: "Experiencias únicas",
        message: "Experiencias únicas",
        image: {
            mobile: '/assets/images/hero/mobile2.png',
            desktop: '/assets/images/hero/desktop2.png'
        }
    },
    {
        title: "Gastronomía multi-formato",
        message: "Gastronomía multi-formato",
        image: {
            mobile: '/assets/images/hero/mobile2.png',
            desktop: '/assets/images/hero/desktop2.png'
        }
    },
];

const HOME_DATA: HomeData = {
    heroData: HERO_SECTIONS,
    hotelsData: HOTELS_DATA.map((hotel) => hotel.thumbnail)
}

export default HOME_DATA;