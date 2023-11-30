<template>
  <div>
    <Navbar currentPage="/event-handling" />

    <button
      @click="boxIsOpen = true"
      class="px-3 py-1 text-white bg-blue-400 rounded-lg"
    >
      Toggle
    </button>

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
