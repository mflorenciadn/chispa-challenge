import { FooterLink, ContactData, FooterData } from "../interfaces";

const ABOUT: string = "Las mejores opciones de cowork, alojamiento y otras experiencias únicas para vivir tu próxima aventura."

const FOOTER_LINKS: FooterLink[] = [
    {
        name: "Alójate",
        url: "/stays",
    },
    {
        name: "Co-Work",
        url: "/orders",
    },
    {
        name: "Experimenta",
        url: "/",
    },
    {
        name: "Únete",
        url: "/join",
    },
    {
        name: "Inversores",
        url: "/investors",
    },
];

const CONTACT_DATA: ContactData = {
    telephone: "(054) 1234567",
    email:
        "info@nomadperu.com.pe"
};

const FOOTER_MESSAGE: string = "Gracias por scrollear";

const FOOTER_DATA: FooterData = {
        about: ABOUT,
        contact: CONTACT_DATA,
        links: FOOTER_LINKS,
        message: FOOTER_MESSAGE
}

export default FOOTER_DATA;
