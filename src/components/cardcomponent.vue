<template>
      <div class=" container mt-4">
            <div class="row p-3">
                
                <div v-for="x in  store.cards" :key="x.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div>
                        <div class="card mb-3">
                            <img :src="x.imageUrl" :alt="x.id">
                            <div class="card-footer ">
                                <h6>{{ x.name }}</h6>
                                <p>{{ x.type }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
</template>

<script>
import {store} from '../data/store'
    export default {
        data() {
        return {
          store
        }
    },
   
    }
</script>

<style lang="scss" scoped>

</style>