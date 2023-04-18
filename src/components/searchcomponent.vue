<template>
    <div class="input-group my-3 text-center ">
        <input type="text" class="form-control" placeholder="Cerca...">
        <select class="form-select" id="searchArchetype">
            <option selected disabled value="">Choose Archetype</option>
            <option v-for="archetype in archetypeList" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
        <button class="btn btn-outline-light text-dark" type="button" id="button-addon1">Button</button>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
export default {
    data() {
        return {
            store,
            archetypeList:[]

        }
    },
    methods: {
        getArchetypes() {
            axios.get(store.baseUrl + store.endUrlArchetype).then(res => {
                this.archetypeList = res.data    
                console.log(this.archetypeList);           
            })
        }
    },
    mounted() {
        this.getArchetypes()
    }
}

</script>

<style lang="scss" scoped>
div {
    background-color: orange;
    width: 33%;
    margin: auto;
}
</style>