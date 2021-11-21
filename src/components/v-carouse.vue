<template>
    <div class="card-prod-img__wrp-pos">
        <div class="card-prod-img__wrapper">
            <div class="card-prod-img__v-carousel" :style="{'margin-left': '-' + (100 * currentSliderIndex) + '%'}">
                <v-carousel-item
                    v-for="item in carousel_data"
                    :key="item.id"
                    :item_data="item"
                ></v-carousel-item>

            </div>
            
            
        </div>
        <div class="card-prod-img__wrp-min-img">
            <button @click="prevSlide">
                <img class="card-prod-img__btn-up" src="../../public/icon/slider-icon-up-card.svg" alt="стрелка вверх">
            </button>
            <div 
                :style="{'top': border_pos + 'px'}"
                class="card-prod-img__border"
            ></div>
            <v-carousel-item 
                    class="card-prod-img__v-carouse-lift"
                    v-for="item in carousel_data"
                    :key="item.id"
                    :item_data="item"
                    @click="imgClick"
            ></v-carousel-item>
            <button @click="nexSlide"><img src="../../public/icon/slider-icon-down-card.svg" alt="стрелка вверх"></button>
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
            currentSliderIndex: 0,
            border_pos: 39
        }
    },
    methods: {
        prevSlide() {
            if(this.currentSliderIndex > 0) {
                this.currentSliderIndex--
                this.border_pos = (this.border_pos - 72);
            } else if(this.currentSliderIndex == 0) {
                this.currentSliderIndex = this.carousel_data.length -1;
                this.border_pos = (this.border_pos + ((this.carousel_data.length - 1) * 72));
            }
        },
        nexSlide() {
            if(this.currentSliderIndex >= this.carousel_data.length -1){
                this.currentSliderIndex = 0;
                this.border_pos = 39;
            } else {
                this.currentSliderIndex++;
                this.border_pos = (this.border_pos + 72);
                console.log(this.border_pos + 72);
            }
            
        },
        imgClick(){
            console.log("click");
        }
    }
})
</script>

<style lang="scss" scoped>
    @import url("../scss/_slider-card-prod.scss");
</style>