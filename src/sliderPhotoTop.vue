<template>
    <sliderPhoto :sliderItems="sliderItems">
        <v-carousel-item 
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
        ></v-carousel-item>
    </sliderPhoto>
</template>

<script>
import vCarouselItem from './components/v-carousel-item.vue'

export default ({
    name: 'sliderPhoto',
    components: vCarouselItem,
    data() {
        return {
            // sliderItems: [
            // { id: 1, name: 'img1', img: '1.png'}
            // ]
        }
        
    }
})
</script>
