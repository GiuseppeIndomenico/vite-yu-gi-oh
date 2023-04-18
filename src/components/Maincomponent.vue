<template>
    <main>
        <cardcomponent />
    </main>
</template>


<script>
import { store } from '../data/store'
import cardcomponent from './cardcomponent.vue'
export default {
    components: {
        cardcomponent
    },
    data() {
        return {
            store
        }
    },

}
</script>

<style lang="scss" scoped>
div {
    background-color: #fefefe;
}
</style>