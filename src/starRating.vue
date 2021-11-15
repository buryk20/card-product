<template>
  <div>
    <div class="rating">
      <div class="rating__body">
        <div v-bind:style="{width: `${inpVal * 2 * 10}%`}" class="rating__active"></div>
        <div class="rating__items">
          <input type="radio" name="ration" @input="inputValue" class="rating__item" value="1">
          <input type="radio" name="ration" @input="inputValue" class="rating__item" value="2"> 
          <input type="radio" name="ration" @input="inputValue" class="rating__item" value="3"> 
          <input type="radio" name="ration" @input="inputValue" class="rating__item" value="4"> 
          <input type="radio" name="ration" @input="inputValue" class="rating__item" value="5">  
        </div>
      </div>
      <div class="rating__value" >отзывы {{ counter }}</div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'starRating',
  data() {
      return {
        counter: 0,
        inpVal: 0
        // a: 0
        // widthAction: counter
      }
  },
  methods: {
    createPost () {

    },
    inputValue (event) {
      var inpVal; 
      this.inpVal = event.target.value;
      console.log(inpVal);
    }
  },
  props: {

  }
}

</script>

<style lang="scss" scoped>
.rating {
  display: flex;
  align-items: flex-end;
  font-size: 40px;
  line-height: 0.75;
  &__value {
    font-size: 50%;
  }
  &__body {
    position: relative;
    &::before {
      content: url("../public/icon/star-card-product-total-des.svg");
      display: block;
    }
  }
  &__items {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  &__item {
    flex: 0 0 15%;
    height: 100%;
    opacity: 0;
  }
  &__active {
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    &::before {
      content: url("../public/icon/star-card-product-total.svg");
      position: absolute;
      width: 80%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
}
</style>