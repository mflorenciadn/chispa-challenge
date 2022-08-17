import { CarrouselSection, HomeData } from "../interfaces";

const CARROUSEL_SECTIONS: CarrouselSection[] = [
    {
        title: "Concepto de co-living",
        message: "Tu tribu te espera",
        image: "/",
    },
    {
        title: "Experiencias únicas",
        message: "Experiencias únicas",
        image: "/",
    },
    {
        title: "Gastronomía multi-formato",
        message: "Gastronomía multi-formato",
        image: "/",
    },
];

const PHRASE: string = "Un hogar con espacio para coworkear, conectarte con  aventuras locales y personas increíbles."


const HOME_DATA: HomeData = {
    carrouselSections: CARROUSEL_SECTIONS,
    phrase: PHRASE,
}

export default HOME_DATA;