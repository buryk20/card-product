<template>
    <div
        :style="{ 'margin-left': '-' + 100 * currentSliderIndex + '%' }"
      >
        <img
          v-for="item in carousel_data"
          :key="item.id"
          :src="'/img/' + item.img"
          alt="карусель"
        />
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