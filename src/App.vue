<template>
  <header class="d-flex align-items-center">
    <Headercomponent/>
  </header>

  <Maincomponent/>
</template>

<script>
import {store} from './data/store.js'
import Maincomponent from './components/Maincomponent.vue';
import Headercomponent from './components/Headercomponent.vue';

  export default {
   data(){
    return{
      store
    }
   },
    components:{
      Headercomponent,
      Maincomponent,
   
  }
}
</script>

<style lang="scss" scoped>
header{
  background-color: #fefefe;
}
</style>