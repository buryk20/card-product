<template>
  <div class="overall-rating-card-prod">
    <p class="overall-rating-card-prod__title">Общий рейтинг</p>
    <div class="overall-rating-card-prod__wrp">
      <div>
        <p class="overall-rating-card-prod__num">5,0</p>
        <starReviews class="overall-rating-card-prod__star"></starReviews>
        <p class="overall-rating-card-prod__text">{{ numberOfReviews }} отзывов</p>
      </div>
      <div class="rating-scale">
          <div class="rating-scale__wrp">
              <p class="rating-scale__num">5</p><img class="rating-scale__star-icon" src="/icon/star-card-product.svg" alt="stars">
              <div class="rating-scale__pos-wrp">
                <div v-bind:style="{ width: `${averageFive * 10}%` }" class="rating-scale__act"></div>
                <div class="rating-scale__des"></div>
              </div>
                <p class="rating-scale__num-style">{{ numberStars }}</p>
          </div>
      </div>
    </div>
  </div> 
</template>

<script>

import starReviews from './starReviews.vue'

export default {
  name: 'ratingReview',
  components: {
    starReviews
  },
  data () {
      return {
        numberStars: 15,
        averageFive: 2,
        numberOfReviews: 2
      }
  }
}
</script>

<style lang="scss" src="../scss/main_card.scss" scoped>


</style>

