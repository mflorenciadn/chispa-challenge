import { NavItem } from "../interfaces";

const NAV_ITEMS: NavItem[] = [
    {
        label: "Alójate",
        href: "/stays",
    },
    {
        label: "Co-Work",
        href: "/orders",
    },
    {
        label: "Experimenta",
        href: "/experiences",
        subItems: [
            {
                label: "City Host",
                href: "/city",
            },
            {
                label: "Actividades",
                href: "/activities",
            },
            {
                label: "Gastronomía",
                href: "/gastronomy",
            },
            {
                label: "Eventos",
                href: "/events",
            },
        ],
    },
    {
        label: "Únete",
        href: "/join",
    },
    // {
    //     label: "Reservar",
    //     href: "/reserve",
    // },
];

export default NAV_ITEMS;