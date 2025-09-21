import { ObjectId } from "mongodb";

export interface Session {
  _id?: ObjectId;
  user_id: string;
  jwt: string;
}

// Tipo para crear una nueva sesión (sin _id)
export interface CreateSessionDTO {
  user_id: string;
  jwt: string;
}

// Tipo para actualizar una sesión (solo el JWT puede ser actualizado)
export interface UpdateSessionDTO {
  jwt: string;
}