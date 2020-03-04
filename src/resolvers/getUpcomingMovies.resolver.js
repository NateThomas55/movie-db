import fetch from 'node-fetch'
import 'dotenv/config'

const getUpcomingMovies = {
  UpcomingMoviesList: {
    movies: parent => {
      const promises = parent.results.map(item => item)
      return Promise.all(promises)
    }
  },
  Query: {
    getUpcomingMovies: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_SECRET}&language=en-US&page=1&region=US`
      )
      const data = await response.json()
      return data
    }
  }
}

export default getUpcomingMovies
