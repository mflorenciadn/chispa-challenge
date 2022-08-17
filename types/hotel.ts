export type HotelData = {
    drawer: DrawerData,
    thumbnail: ThumbnailData,
};

export type DrawerData = {
    image: string,
    title: string,
    titleImage: string,
    description: string,
    services: string,
    price: Number,
};

export type ThumbnailData = {
    image: string,
    titleImage: string,
    description: string,
    location: string,
    backgroundColor: string,
    services: string[],
};