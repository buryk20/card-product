<template>
    <div>
        <img class="card-prod-img__img" :src="require('../../public/img/' + item_data.img)" alt="карусель">
    </div>
</template>

<script>

export default {
    name: 'v-carouse-item',
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

<style lang="scss" scoped>
    @import url("../scss/_slider-card-prod.scss");
</style>
