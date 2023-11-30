<template>
  <div>
    <Navbar currentPage="/reactivity" />
    <h1>Counter Application</h1>
    <p>{{ counter }}</p>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
