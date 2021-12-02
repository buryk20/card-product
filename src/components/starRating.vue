<template>
  <div>
    <div class="rating">
      <div class="rating__body">
        <div
          v-bind:style="{ width: `${v_userRaring * 20}%` }"
          class="rating__active"
        ></div>
        <starR />
      </div>
      <div class="rating__value">{{ v_userRaring }} {{ reviewsText }}</div>
    </div>
  </div>
</template>

<script>

import starR from './stars.vue'

export default {
  name: "starRating",
  components: {
    starR
  },
  data() {
    return {
      reviewsText: "отзывы",
    };
  },
  props: {
    v_userRaring: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" src="../scss/_star-rating.scss" scoped>


</style>
