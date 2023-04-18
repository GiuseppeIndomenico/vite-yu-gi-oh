<template>
    <div>
      <nav>
        <searchcomponent @search="handleSearch" />
      </nav>

      <main>
        <cardcomponent :cards="store.cards" ref="cardcomponent" />
      </main>
    </div>
  </template>
  
  <script>
  import cardcomponent from './cardcomponent.vue'
  import searchcomponent from './searchcomponent.vue';
  import { store } from '../data/store';
  
  export default {
    data() {
      return {
        store
      }
    },
    components: {
      cardcomponent,
      searchcomponent
    },
    methods: {
      handleSearch(cards) {
        this.store.cards = cards;
      }
    }
  }
  </script>
  
<style lang="scss" scoped>
nav {
    background-color: orange;
}

main{
    background-color: #fefefe;
}
</style>