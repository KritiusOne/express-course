import { ObjectId } from "mongodb";

export interface Comment {
  _id?: ObjectId;
  name: string;
  email: string;
  movie_id: ObjectId;
  text: string;
  date: Date;
}

// Tipo para crear un nuevo comentario (sin _id, la fecha se asigna automáticamente)
export interface CreateCommentDTO {
  name: string;
  email: string;
  movie_id: string; // Se recibe como string y se convierte a ObjectId
  text: string;
}

// Tipo para actualizar un comentario (solo el texto puede ser modificado)
export interface UpdateCommentDTO {
  text: string;
}