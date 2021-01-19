<template>
  <div class="container-fluid">
    <h1>
      <img
        alt="Vue logo"
        src="./assets/logo.png"
        style="height: 50px; "
      > ueFlix
    </h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App Winter Class" /> -->
    <search-component />
    <div class="row">
      <results-component />
      <active-movie-component />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import ActiveMovieComponent from './components/ActiveMovieComponent.vue'
import ResultsComponent from './components/ResultsComponent.vue'
// import HelloWorld from './components/HelloWorld.vue'
import SearchComponent from './components/SearchComponent.vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup () {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {
    // HelloWorld
    SearchComponent,
    ActiveMovieComponent,
    ResultsComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
