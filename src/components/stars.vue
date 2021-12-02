<template>
  <div>
        <div class="rating__items">
            <input
            type="radio"
            name="ration"
            v-model="userRaring"
            class="rating__item"
            value="1"
            />
            <input
            type="radio"
            name="ration"
            v-model="userRaring"
            class="rating__item"
            value="2"
            />
            <input
            type="radio"
            name="ration"
            v-model="userRaring"
            class="rating__item"
            value="3"
            />
            <input
            type="radio"
            name="ration"
            v-model="userRaring"
            class="rating__item"
            value="4"
            />
            <input
            type="radio"
            name="ration"
            v-model="userRaring"
            class="rating__item"
            value="5"
            />
        <starRating :v_userRaring="userRaring"></starRating>   
        </div>
    </div>
</template>

<script>

import starRating from './starRating.vue'

export default {
  name: "star-r",
  components: {
    starRating
  },
  data() {
    return {
      userRaring: 0
    };
  }
};
</script>

<style lang="scss" src="../scss/_star-rating.scss" scoped>


</style>
