import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
}

// Tipo para crear un nuevo usuario (sin _id)
export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

// Tipo para actualizar un usuario (todos los campos opcionales excepto password que se maneja por separado)
export interface UpdateUserDTO {
  name?: string;
  email?: string;
}

// Tipo para respuestas públicas (sin password)
export interface UserPublic {
  _id?: ObjectId;
  name: string;
  email: string;
}

// Tipo para cambio de contraseña
export interface ChangePasswordDTO {
  currentPassword: string;
  newPassword: string;
}