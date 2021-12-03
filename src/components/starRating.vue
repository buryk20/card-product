<template>
  <div>
    <div class="rating">
      <div class="rating__body">
        <div
          v-bind:style="{ width: `${userRaring * 20}%` }"
          class="rating__active"
        ></div>
        <stars v-model="userRaring" v-model:title='userRaring'></stars>
      </div>
      <div class="rating__value">{{ userRaring }} {{ reviewsText }}</div>
    </div>
  </div>
</template>

<script>
import stars from "./stars.vue";

export default {
  name: "starRating",
  components: {
    stars,
  },
  data() {
    return {
      userRaring: 0,
      reviewsText: "отзывы",
    };
  },
};
</script>

<style lang="scss" src="../scss/_star-rating.scss" scoped></style>
