<template>
    <div class="card-prod-img__wrapper">
        <div class="card-prod-img__v-carousel" :style="{'margin-left': '-' + (100 * currentSliderIndex) + '%'}">
            <v-carousel-item
                v-for="item in carousel_data"
                :key="item.id"
                :item_data="item"
            ></v-carousel-item>

        </div>
        <button @click="prevSlide">назад</button>
        <button @click="nexSlide">вперед</button>
    </div>
</template>

<script>
import vCarouselItem from './v-carousel-item.vue'

export default ({
    name: 'v-carouse',
    components: {
        vCarouselItem
    },
    props: {
        carousel_data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            currentSliderIndex: 0
        }
    },
    methods: {
        prevSlide() {
            if(this.currentSliderIndex > 0) {
                this.currentSliderIndex--
                console.log(this.currentSliderIndex);
            }
        },
        nexSlide() {
            this.currentSliderIndex++
            console.log(this.currentSliderIndex);
        }
    }
})
</script>

<style lang="scss" scoped>
    @import url("../scss/_slider-card-prod.scss");
</style>