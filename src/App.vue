<template>
  <Headercomponent/>

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

</style>