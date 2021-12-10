<template>
    <div
    :class="{show: show}"
    :id="id"
    @click.self='closePop'
    >
        <slot :parent="this">Контент</slot>
    </div>
</template>

<script>

    export default ({
        props: {
            id: {
                type: String,
                required: true
            }
        },
        methods: {
            closePop(){
                this.show = false;
            }
        },
        computed: {
            show: {
                get() {
                    return this.$store.getters.SHOW_POPS[this.id];
                },
                set(value) {
                    this.$store.commit('SET_SHOW_POPS', {key: this.id, value: value});
                }
            }
        }
    })
</script>
