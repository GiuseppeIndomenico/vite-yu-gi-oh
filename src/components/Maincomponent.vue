<template>
    <main>
        <div class=" container mt-4">
            <div class="row p-3">
                <div v-for="x in  card" :key="x.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
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
    </main>
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            card: [],
        }
    },
    methods: {
        getCards() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0')
                .then(res => {
                    const cards = res.data.data;
                    const cardData = [];

                    for (let i = 0; i < cards.length; i++) {
                        const card = {
                            id: cards[i].id,
                            name: cards[i].name,
                            type: cards[i].type,
                            imageUrl: cards[i].card_images[0].image_url
                        };

                        cardData.push(card);
                    }
                    this.card = cardData;

                })

        },

    },
    mounted() {
        this.getCards()
    }
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