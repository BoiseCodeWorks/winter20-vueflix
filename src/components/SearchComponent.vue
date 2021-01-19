<template>
  <div class="searchComponent">
    <form @submit.prevent="searchMovies()">
      <div class="form-group">
        <input
          type="text"
          name="query"
          id="query"
          class="form-control"
          placeholder="Search a movie..."
          aria-describedby="helpId"
          v-model="state.query"
        >
        <button
          class="btn btn-success"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { movieService } from '../services/MovieService'
export default {
  name: 'SearchComponent',
  setup () {
    const state = reactive({
      query: ''
    })
    return {
      state,
      searchMovies () {
        console.log(state.query)
        movieService.searchMovies(state.query)
      }
    }
  }
}
</script>

<style >

</style>
