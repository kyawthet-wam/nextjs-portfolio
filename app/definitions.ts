export type Work = {
    title:string;
    place:string;
    duration:string;
    link:string;
}

export type Projects = {
    title:string;
    image:string;
    description:string;
    playStoreLink?:string;
    appStoreLink?:string;
    webLink?:string;
    photos: string[];
}