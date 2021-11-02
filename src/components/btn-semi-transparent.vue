<template>
  <button class="btn-wrp">
    <a href="#">Узнай детали</a>
  </button>  
</template>

<script>
export default {
  name: 'btnSemiTransparent',
//   props: {
//     msg: String
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_main_variable_gv.scss";
.btn-wrp {
    @include btnCardTransparent;
}
</style>
