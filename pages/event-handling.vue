<template>
  <div>
    <Navbar currentPage="/event-handling" />

    <button
      @click="boxIsOpen = true"
      @dblclick="boxIsOpen=false"
      class="px-3 py-1 text-white bg-blue-400 rounded-lg"
    >
      Toggle
    </button>

    <h1 class="text-center text-red-600 text-[200px]">Hello World</h1>

    <div v-if="boxIsOpen" class="mt-5 bg-blue-400 h-80 w-80"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxIsOpen: false,
    };
  },
};
</script>
