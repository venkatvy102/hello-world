export interface IStatus {
    MetaDataID: number;
    MovieName: string;
    ReleaseDate: string;
    Language: string;
    TmdbID: string;
    MagnetLink: string;
    IsAdded: boolean;
    AddedTime: string;
    PutioFolderID: string;
    IsDownloaded: boolean;
    DownloadStartTime: string;
    IsSynced: boolean;
    SyncTime: string;
    AlreadyExist: boolean;
    ExistDeterminedTime: string;
    TmdbMovieDetails: IMovie;
}

export interface IMovie {
    poster_path: string;
    original_title: string;  
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    id: number;  
}