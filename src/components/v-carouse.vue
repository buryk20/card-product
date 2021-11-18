<template>
    <div class="wrapper">
        <div>
            <v-carousel-item 
                v-for="item in carousel_data"
                :key="item.id"
                :item_data="item"
            ></v-carousel-item>
        </div>
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
            // sliderItems: [
            // { id: 1, name: 'img1', img: '1.png'}
            // ]
        }
        
    }
})
</script>

<style lang="scss" scoped>
@import url("../scss/_slider-card-prod.scss");
</style>