export default {
    install(app, ) {
        app.config.globalProperties.$showId = function (id, hasListener = true) {
            if (hasListener) {
                this.$store.commit("SET_SHOW_POPS", { key: id, value: true})
            } else {
                document.getElementById(id).classList.add("show")
            }
        }
    }
}