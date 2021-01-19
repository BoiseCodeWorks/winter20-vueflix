<template>
  <div
    class="activeMovie col-6"
    v-if="state.movie.id"
  >
    <h4>Selected Movie: </h4>
    <movie-poster-component
      test-prop="another test string"
      :movie-data="state.movie"
    />
    {{ state.movie.overview }}
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import MoviePosterComponent from './MoviePosterComponent'
export default {
  name: 'ActiveMovie',
  setup () {
    const state = reactive({
      movie: computed(() => AppState.activeMovie)
    })
    return { state }
  },
  components: { MoviePosterComponent }
}
</script>

<style scoped>

</style>
