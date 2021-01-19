<template>
  <div class="Results col-6">
    <h4>Movies Found : </h4>
    <moviePoster
      v-for="movie in movies"
      :key="movie.id"
      :movie-data="movie"
      test-prop="testpropstring"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import MoviePoster from './MoviePosterComponent'
import { AppState } from '../AppState'
export default {
  name: 'Results',
  setup () {
    return {
      movies: computed(() => AppState.movies)
    }
  },
  components: { MoviePoster }
}
</script>

<style scoped>

</style>
