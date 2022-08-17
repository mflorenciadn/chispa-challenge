export type FooterLink = {
    id: string,
    url: string,
};

export type ContactData = {
    telephone: string,
    email: string,
};

export type SocialMedia = {
    id: string,
    icon: string,
    url: string
};

export type FooterData = {
    contact: ContactData,
    links: FooterLink[],
    socialMedia: SocialMedia[]
};
