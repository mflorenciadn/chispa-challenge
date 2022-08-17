import { FooterLink, ContactData, SocialMedia, FooterData } from "@interfaces/footer";

const FOOTER_LINKS: FooterLink[] = [
    {
        id: "stay",
        url: "/stays",
    },
    {
        id: "co-work",
        url: "/co-work",
    },
    {
        id: "experiment",
        url: "/",
    },
    {
        id: "join",
        url: "/join",
    },
    {
        id: "investors",
        url: "/investors",
    },
];

const CONTACT_DATA: ContactData = {
    telephone: "(054) 1234567",
    email:
        "info@nomadperu.com.pe"
};

const SSMM_LINKS: SocialMedia[] = [
    {
        id: "youtube",
        icon: "/assets/icons/social/ic_youtube.svg",
        url: "/",
    },
    {
        id: "facebook",
        icon: "/assets/icons/social/ic_facebook.svg",
        url: "/",
    },
    {
        id: "twitter",
        icon: "/assets/icons/social/ic_twitter.svg",
        url: "/",
    },
    {
        id: "instagram",
        icon: "/assets/icons/social/ic_instagram.svg",
        url: "/",
    },
];

const FOOTER_DATA: FooterData = {
    contact: CONTACT_DATA,
    links: FOOTER_LINKS,
    socialMedia: SSMM_LINKS
}

export default FOOTER_DATA;
