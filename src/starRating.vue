<template>
  <div>
    <div class="rating">
      <div class="rating__body">
        <div
          v-bind:style="{ width: `${userRaring * 20}%` }"
          class="rating__active"
        ></div>
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
        </div>
      </div>
      <div class="rating__value">{{ userRaring }} {{ reviewsText }}</div>
    </div>
  </div>
</template>

<script>


export default {
  name: "starRating",
  data() {
    return {
      userRaring: 0,
      reviewsText: "отзывы",
      arrServ: [],
    };
  },
  methods: {
    createPost() {},
    inputValue() {
      // var userRaring;
      // this.userRaring = event.target.value;
      // // inpVal = this.inpVal;
      // console.log(this.userRaring);
      // console.log(userRaring);
    },
    // getList(){
    //   this.$myHttp.get(api).then((response) => {
    //     console.log(response.data)
    //   })
    //   this.axios2.get(api).then((response) => {
    //     console.log(response.data)
    //   })
    // }
  },
  computed: {
    // getReviewWord() {
    //   let lastNum = this.arrServ.length % 10;
    //   if (lastNum >= 5) return "";
    //   else if()
    // },
  },
  mounted() {
    // this.axios
    //   .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    //   .then((response) => (this.userRaring = response.));


  },

  props: {},
};
</script>

<style lang="scss" scoped>
@import "scss/_main_variable_gv.scss";

.rating {
  display: flex;
  align-items: center;
  font-size: 40px;
  line-height: 0.75;
  &__value {
    font-size: 50%;
    @include underlinedGreenText;
  }
  &__body {
    margin-right: 16px;
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
