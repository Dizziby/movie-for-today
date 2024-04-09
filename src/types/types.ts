import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen: HomeStackParamList;
  TopScreen: TopStackParamList;
  FiltersScreen: FiltersStackParamList;
  SearchScreen: SearchStackParamList;
  AboutUs: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  MovieDetails: undefined;
};

export type TopStackParamList = {
  Top: undefined;
  MovieDetails: undefined;
};

export type FiltersStackParamList = {
  Filters: undefined;
  MovieDetails: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
  MovieDetails: undefined;
};

export type NestedStack = {
  MovieDetails: undefined;
};

// export type MainDetailsPropsType = CompositeScreenProps<BottomTabScreenProps<NestedStack, "MainDetails">, StackScreenProps<RootStackParamList>>
type UseNavigationType = NavigationProp<RootStackParamList>;
// export type UsersPropsType = NativeStackScreenProps<RootStackParamList, "Users">
export const useAppNavigation = () => useNavigation<UseNavigationType>();

// Response types

export interface GetPremieresResponse {
  total: number;
  items: IPremieresMovie[];
}

export interface GetReleasesResponse {
  releases: IReleasesMovie[];
  page: number;
  total: number;
}

export interface IPremieresMovie {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: ICountry[];
  genres: IGenre[];
  duration: number;
  premiereRu: string;
}

export interface IReleasesMovie {
  filmId: number;
  nameRu: string;
  nameEn?: any;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: ICountry[];
  genres: IGenre[];
  rating: number;
  ratingVoteCount: number;
  expectationsRating: number;
  expectationsRatingVoteCount: number;
  duration: number;
  releaseDate: string;
}

export interface ICountry {
  country: string;
}
export interface IGenre {
  genre: string;
}

export interface GetSearchResponse {
  keyword: string;
  pagesCount: number;
  films: ISearchMovie[];
  searchFilmsCountResult: number;
}

export interface ISearchMovie {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: string;
  description: string;
  filmLength: string;
  countries: ICountry[];
  genres: IGenre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface GetTopResponse {
  pagesCount: number;
  films: ITopMovie[];
}

export interface ITopMovie {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: string;
  filmLength: string;
  countries: ICountry[];
  genres: IGenre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange?: any;
}

export interface GetFiltersResponse {
  total: number;
  totalPages: number;
  items: IFiltersMovie[];
}

export interface IFiltersMovie {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn?: any;
  nameOriginal: string;
  countries: ICountry[];
  genres: IGenre[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface GetInfoMovieResponse {
  kinopoiskId: number;
  imdbId?: any;
  nameRu: string;
  nameEn?: any;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl?: any;
  reviewsCount: number;
  ratingGoodReview?: any;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait?: any;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation?: any;
  isTicketsAvailable: boolean;
  productionStatus?: any;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  countries: ICountry[];
  genres: IGenre[];
  startYear?: any;
  endYear?: any;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
}

export interface GetFramesMovieResponse {
  total: number;
  totalPages: number;
  items: IFrames[];
}

export interface IFrames {
  imageUrl: string;
  previewUrl: string;
}

export interface GetSimilarsMovieResponse {
  total: number;
  items: ISimilars[];
}
export interface ISimilars {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: string;
}

export interface GetTrailerMovieResponse {
  total: number;
  items: ITrailer[];
}
export interface ITrailer {
  url: string;
  name: string;
  site: string;
}
