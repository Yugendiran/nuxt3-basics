<template>
  <div>Hello {{ numbers }}</div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [5, 10],
    };
  },
  methods: {
    getRandomNumbers() {
      let numbers = this.numbers;

      for (let i = 0; i < 9; i++) {
        let randomNum = Math.floor(Math.random() * 99) + 1;
        numbers.push(randomNum);
      }

      return numbers;
    },
  },
};
</script>
