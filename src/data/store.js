import { reactive } from 'vue';

export const store = reactive({
    cards: [],
    archetype:[],
    baseUrl: 'https://db.ygoprodeck.com/api/v7',
    endUrlCard:'/cardinfo.php?num=50&offset=0',
    endUrlArchetype:'/archetypes.php',
})