import { NavItem } from "@interfaces/nav";

const NAV_ITEMS: NavItem[] = [
    {
        id: "stay",
        href: "/stay",
    },
    {
        id: "co-work",
        href: "/co-work",
    },
    {
        id: "experiences",
        href: "/",
        subItems: [
            {
                id: "city-host",
                href: "/city-host",
            },
            {
                id: "activities",
                href: "/activities",
            },
            {
                id: "gastronomy",
                href: "/gastronomy",
            },
            {
                id: "events",
                href: "/events",
            },
        ],
    },
    {
        id: "join",
        href: "/join",
    },
];

export default NAV_ITEMS;