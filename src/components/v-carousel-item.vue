<template>
    <div>
        <img :src="require('../../public/img/' + item_data.img)" alt="">
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
