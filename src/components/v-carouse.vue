<template>
  <div class="card-prod-img__wrp-pos">
    <div class="card-prod-img__wrapper">
      <div
        class="card-prod-img__v-carousel"
        :style="{ 'margin-left': '-' + 100 * currentSliderIndex + '%' }"
      >
        <img
          v-for="item in carousel_data"
          :key="item.id"
          class="card-prod-img__img"
          :src="'/img/' + item.img"
          alt="карусель"
        />
      </div>
    </div>
    <div class="card-prod-img__wrp-min-img">
      <button class="card-prod-img__btn-wrp" @click="prevSlide">
        <img
          class="card-prod-img__btn-up"
          src="/icon/slider-icon-up-card.svg"
          alt="стрелка вверх"
        />
      </button>
      <div  class="my-w">
        <div
          class="card-prod-img__little-img-w"
          v-for="(item, index) in carousel_data"
          :key="item.id"
          :style="getMarginForFirst(index)"
          @click="imgClick(index, $event)"
        >
          <img
            class="card-prod-img__little-img"
            :class="{ active: currentSliderIndex === index }"
            :src="'/img/' + item.img"
            alt="карусель"
          />
        </div>
      </div>
      <button class="card-prod-img__btn-wrp" @click="nexSlide">
        <img src="/icon/slider-icon-down-card.svg" alt="стрелка вверх" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-carouse",
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentSliderIndex: 0,
      littleImgWrapHeight: 0,
    };
  },
  computed: {
    littleImgMargin() {
      return -this.littleImgWrapHeight * this.currentSliderIndex;
    },
  },
  methods: {
    getMarginForFirst(index) {
      let v = index === 0 ? this.littleImgMargin + "px" : 0;
      return {
        "margin-top": v,
      };
    },
    prevSlide() {
      this.currentSliderIndex--;

      if (this.currentSliderIndex < 0) {
        this.currentSliderIndex = this.carousel_data.length - 1;
      }
    },
    nexSlide() {
      this.currentSliderIndex++;

      if (this.currentSliderIndex >= this.carousel_data.length) {
        this.currentSliderIndex = 0;
      }
    },
    imgClick(currIndex, event) {
      this.currentSliderIndex = currIndex;
      this.littleImgWrapHeight =
        event.currentTarget.getBoundingClientRect().height;
    },
  },
};
</script>

<style lang="scss" src="../scss/_slider-card-prod.scss" scoped>


</style>
