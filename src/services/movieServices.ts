import { ObjectId } from "mongodb";
import { DB } from "../config/DB.js";
import { Movie } from "../models/Movie.js";

async function getMovie(id: string): Promise<Movie | null> {
  try {
    const movies = (await DB()).collection("movies")
    const objectId = new ObjectId(id)
    return await movies.findOne<Movie>({
      _id: objectId
    })
  } catch (error) {
    console.error(error)
    throw new Error(`Error Searching the movie ${id}`)
  }
}

async function getMovies(limit?: number, page?: number): Promise<Movie[]> {
  const query: { limit: number, skip: number } = {
    limit: 50,
    skip: 0
  }
  if(limit && !isNaN(limit)){
    query.limit = limit > 100 ? 100 : limit
  }
  if(page && !isNaN(page)){
    query.skip = page ? (page - 1) * (query.limit) : 0
  }
  try {
    const movies = (await DB()).collection("movies")
    return await movies.find<Movie>({}).limit(query.limit).skip(query.skip).toArray()
  } catch (error) {
    console.error(error)
    throw new Error(`Error Searching all movies`)
  }
}

async function createMovie(movie: Movie): Promise<Movie | undefined> {
  try {
    const movies = (await DB()).collection("movies")
    if(movie && movie.title){
      const result = await movies.insertOne(movie)
      console.log("Insert result")
      console.log(JSON.stringify(result))
      return {
        _id: result.insertedId,
        ...movie
      }
    }
  } catch (error) {
    console.error(error)
    throw new Error(`Error creating movie`)
  }

}
export const movieServices = {
  getMovie,
  getMovies,
  createMovie
}