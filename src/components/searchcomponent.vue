<template>
    <form @submit.prevent="searchCards">
        <div class="input-group my-3 text-center">
            <select v-model="selectedArchetype" class="form-select" id="searchArchetype" name="archetype">
                <option selected disabled value="">Seleziona Archetype</option>
                <option v-for="archetype in archetypeList" :value="archetype.archetype_name">{{ archetype.archetype_name }}
                </option>
            </select>
            <button class="btn btn-outline-light text-dark" type="submit" id="button-addon1">Cerca</button>
        </div>
    </form>
</template>
  
<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
    data() {
        return {
            store,
            archetypeList: [],
            cardName: '',
            selectedArchetype: '',
            imageUrl: ''
        }
    },
    methods: {
        getArchetypes() {
            axios.get(store.baseUrl + store.endUrlArchetype).then(res => {
                this.archetypeList = res.data;
            })
        },
        searchCards() {
            axios.get(store.baseUrl + store.endUrlCard, {
                params: {
                    cardname: this.cardName,
                    archetype: this.selectedArchetype
                }
            })
                .then(res => {
                    const cardData = res.data.data.map(cardInfo => ({
                        id: cardInfo.id,
                        name: cardInfo.name,
                        archetype: cardInfo.archetype,
                        imageUrl: cardInfo.card_images[0].image_url
                    }));
                    this.$emit('search', cardData);
                })
                .catch(error => {
                    console.log(error);
                })
        }

    },
    mounted() {
        this.getArchetypes();
    },

}
</script>

  
  

<style lang="scss" scoped>
div {
    background-color: orange;
    width: 33%;
    margin: auto;
}
</style>