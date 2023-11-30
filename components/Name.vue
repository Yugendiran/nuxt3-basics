<template>
  <div>
    <p class="font-bold text-red-500">Hello {{ name }}</p>

    <button @click="sayParent()">Click</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Guest",
    },
  },
  methods: {
    sayParent() {
      this.$emit("say");
    },
  },
};
</script>
