export interface MovieDetailRes {
  image: {
    medium: string;
    original: string;
  };
  id: number;
  averageRuntime: number;
  summary: string;
  rating: {
    average: number;
  };
  name: string;
  status: string;
  schedule: {
    time: string;
    days: string[];
  };
  genres: string[];
  network: null | {
    country: { name: string };
    id: number;
    name: string;
    officialSite: string;
  };
}

export interface RecentShowsRes extends Array<RecentShowDetail> {}

export interface RecentShowDetail {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: null;
  name: string;
  number: number;
  rating: any;
  runtime: number;
  season: number;
  show: {
    id: number;
    image: {
      medium: string;
    };
    name: string;
    rating: {
      average: number;
    };
  };
  summary: string;
  type: string;
  url: string;
}

export interface CastRes extends Array<Cast> {}

export interface Cast {
  self: boolean;
  voice: boolean;
  person: {
    id: number;
    url: string;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    birthday: Date;
    deathday: null;
    gender: string;
    image: {
      medium: string;
      original: string;
    };
    updated: number;
  };
  character: {
    id: number;
    url: string;
    name: string;
    image: null;
  };
}
