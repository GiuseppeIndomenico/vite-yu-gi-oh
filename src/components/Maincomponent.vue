<template>
    <nav>
        <searchcomponent />
    </nav>
    <main>
        <cardcomponent />
    </main>
</template>


<script>
import cardcomponent from './cardcomponent.vue'
import searchcomponent from './searchcomponent.vue';
export default {
    components: {
        cardcomponent,
        searchcomponent
    },

}
</script>

<style lang="scss" scoped>
div {
    background-color: #fefefe;
};
nav{
    background-color: orange;
}
</style>