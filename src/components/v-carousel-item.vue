<template>
    <div>
        <img :src="require('../../public/img/' + item_data.img)" alt="">
    </div>
</template>

<script>

export default {
    name: 'vCarouselItem',
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    }
};
</script>
