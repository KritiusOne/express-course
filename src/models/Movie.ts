import { ObjectId } from "mongodb";

export interface Movie {
  _id?: ObjectId;
  title: string;
  year?: number;
  runtime?: number;
  released?: Date;
  poster?: string;
  plot?: string;
  fullplot?: string;
  lastupdated?: string;
  type?: string;
  directors?: string[];
  writers?: string[];
  cast?: string[];
  countries?: string[];
  genres?: string[];
  languages?: string[];
  rated?: string;
  awards?: {
    wins?: number;
    nominations?: number;
    text?: string;
  };
  imdb?: {
    rating?: number;
    votes?: number;
    id?: number;
  };
  tomatoes?: {
    viewer?: {
      rating?: number;
      numReviews?: number;
      meter?: number;
    };
    critic?: {
      rating?: number;
      numReviews?: number;
      meter?: number;
    };
    dvd?: Date;
    lastUpdated?: Date;
    rotten?: number;
    production?: string;
    fresh?: number;
  };
  num_mflix_comments?: number;
  // Campos adicionales para embedded_movies
  plot_embedding?: Buffer;
  plot_embedding_voyage_3_large?: Buffer;
}

// Tipo para crear una nueva película (sin _id)
export interface CreateMovieDTO {
  title: string;
  year?: number;
  runtime?: number;
  released?: Date;
  poster?: string;
  plot?: string;
  fullplot?: string;
  type?: string;
  directors?: string[];
  writers?: string[];
  cast?: string[];
  countries?: string[];
  genres?: string[];
  languages?: string[];
  rated?: string;
  awards?: {
    wins?: number;
    nominations?: number;
    text?: string;
  };
  imdb?: {
    rating?: number;
    votes?: number;
    id?: number;
  };
  tomatoes?: {
    viewer?: {
      rating?: number;
      numReviews?: number;
      meter?: number;
    };
    critic?: {
      rating?: number;
      numReviews?: number;
      meter?: number;
    };
    dvd?: Date;
    lastUpdated?: Date;
    rotten?: number;
    production?: string;
    fresh?: number;
  };
}

// Tipo para actualizar una película (todos los campos opcionales)
export interface UpdateMovieDTO {
  title?: string;
  year?: number;
  runtime?: number;
  released?: Date;
  poster?: string;
  plot?: string;
  fullplot?: string;
  type?: string;
  directors?: string[];
  writers?: string[];
  cast?: string[];
  countries?: string[];
  genres?: string[];
  languages?: string[];
  rated?: string;
  awards?: {
    wins?: number;
    nominations?: number;
    text?: string;
  };
  imdb?: {
    rating?: number;
    votes?: number;
    id?: number;
  };
  tomatoes?: {
    viewer?: {
      rating?: number;
      numReviews?: number;
      meter?: number;
    };
    critic?: {
      rating?: number;
      numReviews?: number;
      meter?: number;
    };
    dvd?: Date;
    lastUpdated?: Date;
    rotten?: number;
    production?: string;
    fresh?: number;
  };
}