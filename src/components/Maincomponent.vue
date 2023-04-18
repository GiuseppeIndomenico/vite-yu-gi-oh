<template>
    <main>
      <cardcomponent/>
    </main>
</template>


<script>
import axios from 'axios'
import {store} from '../data/store'
import cardcomponent from './cardcomponent.vue'
export default {
    components:{
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

.card-footer {
    background-color: orange;

    h6 {
        color: white;
        text-align: center;
        font-weight: bold;
        padding: .5rem;
    };
    p{
        text-align: center;
        padding: .5rem;
    }

}

.gi-img {
    width: 65px;
    height: 90px;
}
</style>