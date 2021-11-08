<template>
  <button class="btn-wrp">
    <a href="#">{{ details }}</a>
  </button>  
</template>

<script>
export default {
  name: 'btnSemiTransparent',
  data() {
      return {
          details: "Узнай детали"
      }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_main_variable_gv.scss";
@import "../scss/_styleAdaptive.scss";
.btn-wrp {
    @include btnCardTransparent;
    @include mobileHeight {
      & {
        max-width: 510px;
        width: 100%;
      }
    }
}
</style>
