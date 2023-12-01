<template>
    <div
        class="grid items-center justify-center w-full min-h-screen grid-cols-5 bg-yellow-500"
    >
        <div
            v-for="(card, index) in cards"
            class="flex items-center justify-center w-20 h-20 text-3xl font-bold bg-white rounded-xl"
            @click="openCard(index)"
        >
            <p v-if="card.isFlipped">{{ card.value }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [],
            openedCard: [],
        };
    },
    mounted() {
        for (let i = 0; i < 9; i++) {
            let randomNum = Math.floor(Math.random() * 99) + 1;

            this.cards.push({
                value: randomNum,
                isFlipped: false,
            });

            this.cards.push({
                value: randomNum,
                isFlipped: false,
            });
        }

        this.cards.sort(() => Math.random() - 0.5);
    },
};
</script>
