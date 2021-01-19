<template>
  <div
    class="moviePoster"
    @click="selectMovie()"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`"
      alt=""
    >
    <p>
      {{ movieData.original_title }}
    </p>
  </div>
</template>

<script>
import { movieService } from '../services/MovieService'
export default {
  name: 'MoviePoster',
  props: {
    movieData: Object,
    testProp: String
  },
  setup (props) {
    return {
      selectMovie () {
        console.log(props.movieData)
        movieService.selectMovie(props.movieData)
      }
    }
  }
}
</script>

<style scoped>

</style>
