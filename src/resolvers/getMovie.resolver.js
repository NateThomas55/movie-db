import fetch from 'node-fetch'
import 'dotenv/config'

const getMovie = {
  Movie: {
    videos: parent => {
      const promises = parent.videos.results.map(videos => {
        return videos
      })
      return Promise.all(promises)
    },
    credits: parent => {
      const promises = parent.credits.cast.map(members => {
        return members
      })
      return Promise.all(promises)
    }
  },
  Query: {
    getMovie: async (_, { id }) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_SECRET}&language=en-US&append_to_response=videos,credits`
      )
      const data = response.json()
      return data
    }
  }
}

export default getMovie
