export type NavItem = {
    id: string,
    href: string,
    subItems?: NavItem[],
};

export type NavData = {
    data: NavItem[]
};
