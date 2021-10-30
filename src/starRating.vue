<template>
  <div id="starRating">  
    <Rating :grade="3" :maxStars="5" :hasCounter="true" />
  </div>
</template>

<script>
import Rating from './components/Rating.vue'

export default {
  name: 'starRating',
  components: {
    Rating
  },
  beforeCreate: function() {
    document.body.className = 'home';
  }
}
</script>

<style lang="scss">
  @import '/scss/global.scss';
</style>