<template>
  <div class="reviews-slider-card-prod__wrp-slid">
    <div class="reviews-slider-card-prod__btn-wrp">
      <button :disabled="isDisabled" @click="btnLift" :style="{'color': color}" class="reviews-slider-card-prod__btn-l">
        <img :style="{'display': dispAct}" src="/icon/slider-rev-card-lif-icon.svg" alt="в лево" />
        <img :style="{'display': dispNone}" src="/icon/slider-rev-card-lif-icon-des.svg" alt="в лево" />
      </button>
    </div>
    <div class="slider-rev__wrp">
      <div
          class="slider-rev__img-wrp"
          :style="{ 'margin-left': '-' + 185 * leftBtn + 'px' }"
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
    <div class="reviews-slider-card-prod__btn-wrp">
      <button  @click="rightsBtn" class="reviews-slider-card-prod__btn-r"><img src="/icon/slider-rev-card-re-icon.svg" alt="в право" /></button>
    </div>
  </div>
</template>

<script>
export default {
    name: "sliderRev",
    data(){
      return {
        leftBtn: 0,
        isDisabled: false,
        color: "#009b3e",
        dispAct: "flex",
        dispNone: "none"
      }
    },
    props: {
      carousel_data: {
        type: Array,
        default: () => [],
        }
    },
    methods: {
      btnLift() {
        if(this.leftBtn >= this.carousel_data.length - 4) {
          this.isDisabled = true;
          this.dispAct = "none",
          this.dispNone = "flex"
          console.log(this.leftBtn = this.carousel_data.length);
        } else {
          this.leftBtn = this.carousel_data;
          console.log(this.leftBtn = this.carousel_data.length);
        }
      },
      rightsBtn() {
        this.leftBtn--;
        if (this.leftBtn < this.carousel_data.length - 4) {
          this.isDisabled = false;
          this.dispAct = "flex",
          this.dispNone = "none"
        }
      }
    }
};
</script>

<style lang="scss" src="../scss/main_card.scss" scoped>

</style>