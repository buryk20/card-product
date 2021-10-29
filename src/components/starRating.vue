<template>
 <!-- <div class="card-content">
   <div class="star-rating">
     <div class="star-rating__des star--outlined" v-for="index in starLimit" :key="index">
        <img src="../../public/icon/star-card-product-des.svg" alt="звезда">
     </div>
     <div class="star-rating__colored" :style="`width: ${retingWidth};`">
       <div class="star-rating__current star--color" v-for="index in starLimit" :key="index">
        <img src="../../public/icon/star-card-product.svg" alt="звезда">
        </div>
     </div>
     
   </div>
 </div> -->
 <div id="app">
   <h2>Fluid Stars</h2>
  <star-rating :increment="0.01"></star-rating>
 </div>
</template>

<script>
export default {
  name: 'starRating',
  props: {
    rating: {
      type: Number,
      default: 0
    },
    starLimit: {
      type: Number,
      default: 5
    }
  },
  computed: {
    retingWidth(){
      return this.rating / this.starLimit * 100 + '%'
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .star-rating {
    display: flex;
    position: relative;
    &__current {
      display: flex;
    }
    &__des {
      display: flex;
    }
    &__colored {
      object-fit: cover;
      height: 24px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      left: 0;
      display: flex;
    }
  }
</style>
