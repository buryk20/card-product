<template>
        <button class="card-prod-info__price-btn">Купить</button>
</template>

<script>

export default ({
    name: 'buttonBuy'
})
</script>

<style lang="scss" scoped>
@import "scss/_main_variable_gv.scss";
@import "scss/_styleAdaptive.scss";

.card-prod-info {
    &__price-btn {
        @include btnCardBuy;
        &:hover {
            background-color: $colorHov;
        }
        @include mobileWidth {
            & {
                max-width: none;
            }
        }
    }            
}

</style>
