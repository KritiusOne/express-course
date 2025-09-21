import { ObjectId } from "mongodb";

export interface Theater {
  _id?: ObjectId;
  theaterId: number;
  location: {
    address: {
      street1: string;
      city: string;
      state: string;
      zipcode: string;
    };
    geo: {
      type: "Point";
      coordinates: [number, number]; // [longitude, latitude]
    };
  };
}

// Tipo para crear un nuevo teatro (sin _id)
export interface CreateTheaterDTO {
  theaterId: number;
  location: {
    address: {
      street1: string;
      city: string;
      state: string;
      zipcode: string;
    };
    geo: {
      type: "Point";
      coordinates: [number, number];
    };
  };
}

// Tipo para actualizar un teatro (todos los campos opcionales)
export interface UpdateTheaterDTO {
  theaterId?: number;
  location?: {
    address?: {
      street1?: string;
      city?: string;
      state?: string;
      zipcode?: string;
    };
    geo?: {
      type: "Point";
      coordinates: [number, number];
    };
  };
}