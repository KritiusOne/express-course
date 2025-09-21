import { ObjectId } from "mongodb";
import { DB } from "../config/DB.js";

async function getMovie(id: string) {
  try {
    const movies = (await DB()).collection("movies")
    const objectId = new ObjectId(id)
    return await movies.findOne({
      _id: objectId
    })
  } catch (error) {
    console.error(error)
    throw new Error(`Error Searching the movie ${id}`)
  }
}

async function getAllMovies() {
  try {
    const movies = (await DB()).collection("movies")
    return await movies.find({}).toArray()
  } catch (error) {
    console.error(error)
    throw new Error(`Error Searching all movies`)
  }
}

export const movieServices = {
  getMovie,
  getAllMovies
}