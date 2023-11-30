<template>
  <div class="w-full h-screen" :style="{ backgroundColor: color }">
    <Navbar currentPage="/two-way-binding" />
    <h1>Two Way Binding</h1>
    <input type="text" v-model="color" class="border" />
    {{ color }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "",
    };
  },
};
</script>
