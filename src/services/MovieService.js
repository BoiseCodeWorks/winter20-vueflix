import { AppState } from '../AppState'
import { movieApi } from './AxiosService'

class MovieService {
  async searchMovies (query) {
    try {
      const res = await movieApi.get(query)
      console.log(res)
      AppState.movies = res.data.results
    } catch (error) {
      console.error(error)
    }
  }

  selectMovie (movie) {
    AppState.activeMovie = movie
  }
}
export const movieService = new MovieService()
