<template>
    <div>
        <div>
            <p>5</p><img src="/icon/star-card-product.svg" alt="stars"><p>{{ numberStars }}</p>

        </div>
    </div>
</template>

<script>

export default {
  name: 'ratingReview',
  data () {
      return {
        numberStars: 0
      }
  }
}
</script>

<style lang="scss" scoped>

</style>

