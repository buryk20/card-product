<template>
  <div id="starRating">
    <rating :rating="rating" :star-style="starStyle"></rating>
  </div>
  
</template>

<script>
import Rating from "./components/Rating.vue";

export default {
  name: 'starRating',
  components: {
    Rating: Rating
  },
  data() {
    return {
      config: {
        rating: 4.7,
        isIndicatorActive: true,
        starStyle: {
          fullStarColor: "#ed8a19",
          emptyStarColor: "#737373",
          starWidth: 100,
          starHeight: 100
        }
      }
    };
  },
    computed: {},
    methods: {},
    created() {}
};
</script>

<style>
#starRating {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>