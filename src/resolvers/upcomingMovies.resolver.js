import 'dotenv/config'
import fetch from 'node-fetch'

const upcomingMovies = {
  upcomingMovies: {
    movies: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_SECRET}&language=en-US&page=1&region=US`
      )
      const data = await response.json()
      return data.result
    },
    Query: {
      upcomingMovies: () => ({})
    }
  }
}

export default upcomingMovies
