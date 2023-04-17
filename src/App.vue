<template>
  <header class="d-flex align-items-center">
    <Headercomponent/>
  </header>

  <Maincomponent/>
</template>

<script>
import Maincomponent from './components/Maincomponent.vue';
import Headercomponent from './components/Headercomponent.vue';

  export default {
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