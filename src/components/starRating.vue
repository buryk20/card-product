<template>
    <div class="rating">
      <stars v-model="userRaring" v-model:title='userRaring'></stars>
      <div class="rating__value">{{ userRaring }} {{ reviewsText }}</div>
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
