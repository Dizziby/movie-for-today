import {Top} from '../screen/top/Top';

export type RootStackParamList = {
  Home: undefined;
  Top: undefined;
  Filters: undefined;
  Search: undefined;
  AboutUs: undefined;
};

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
