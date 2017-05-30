export interface IVideo {
    ratingKey: number;
    parentRatingKey: number;
    parentKey: string;
    viewCount: number;
    addedAt: string;
    media: IMedia[];
    usr: IUser[];
    key: string;
    title: string;
    type: string;
    thumb: string;
    art: string;
    index: number;
}

export interface IMedia {
    id: number;
    duration: number;
    bitrate: number;
    width: number;
    height: number;
    aspectRatio: number;
    audioChannels: number;
    audioCodec: string;
    videoCodec: string;
    videoResolution: string;
    container: string;
    parts:  IParts[];
}

export interface IParts {
    id: number;
    key: string;
    duration: number;
    file: string;
    size: number;
    container: string;
}

export interface IUser {
    id: number;
    title: string;
    thumb: string;
}