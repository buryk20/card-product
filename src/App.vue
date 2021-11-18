<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <!-- <star-rating  v-model: rating = "rating"> </star-rating > -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
// import starRating from './components/HelloWorld.vue';
// import StarRating from 'vue-star-rating';

export default {
  name: 'App',
  components: {
    HelloWorld
    // StarRating
  },
  data() {
        return {
            sliderItems: [
            { id: 1, name: 'img1', img: '1.png'}
            ]
        }
        
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
