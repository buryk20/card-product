<template>
  <div class="slider-rev__wrp">
    <div
        class="slider-rev__img-wrp"
        :style="{ 'margin-left': '-' + 100 * currentSliderIndex + '%' }"
      >
      <img
        class="slider-rev__img"
        v-for="item in carousel_data"
        :key="item.id"
        :src="'/img/' + item.img"
        alt="карусель"
      />
    </div>
  </div>
</template>

<script>
export default {
    name: "sliderRev",
    props: {
    carousel_data: {
        type: Array,
        default: () => [],
        }
    }
};
</script>

<style lang="scss" src="../scss/main_card.scss" scoped>

</style>