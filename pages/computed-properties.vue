<template>
  <div>
    <Navbar currentPage="/computed-properties" />
    <p>My name is {{ name }}</p>
    <p>No of books published: {{ books.length }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Yugi",
      books: [
        "Vue 2 - Advanced Guide",
        "Vue 3 - Basic Guide",
        "Vue 4 - The Mystery",
        "Vue 4 - The Mystery",
        "Vue 4 - The Mystery",
        "Vue 4 - The Mystery",
        "Vue 4 - The Mystery",
        "Vue 4 - The Mystery",
        "Vue 4 - The Mystery",
        "Vue 4 - The Mystery",
      ],
    };
  },
};
</script>
