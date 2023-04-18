<template>
  <div>
    <header class="d-flex align-items-center">
      <Headercomponent />
    </header>
    <main>
      <Maincomponent @search="handleSearch" />
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import { store } from './data/store.js'
import Maincomponent from './components/Maincomponent.vue';
import Headercomponent from './components/Headercomponent.vue';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    Headercomponent,
    Maincomponent,

  },
  methods: {
    getCards() {
      axios.get(store.baseUrl + store.endUrlCard)
        .then(res => {
          const cardsInfo = res.data.data;
          const cardData = [];

          for (let i = 0; i < cardsInfo.length; i++) {
            const card = {
              id: cardsInfo[i].id,
              name: cardsInfo[i].name,
              archetype: cardsInfo[i].archetype,
              imageUrl: cardsInfo[i].card_images[0].image_url
            };

            cardData.push(card);
          }
          store.cards = cardData;

        })

    },
    handleSearch(cards) {
      store.cards = cards;
    }
  },
  mounted() {
    this.getCards()
  }
}
</script>


<style lang="scss" scoped>
header {
  background-color: #fefefe;
}


</style>