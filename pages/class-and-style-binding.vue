<template>
  <div
    class="w-full h-screen bg-gray-500"
    :class="{
      '!bg-red-500': bgcolor === 'red',
      '!bg-blue-500': bgcolor === 'blue',
      '!bg-green-500': bgcolor === 'green',
      '!bg-yellow-500': bgcolor === 'yellow',
      '!bg-purple-500': bgcolor === 'purple',
      '!bg-pink-500': bgcolor === 'pink',
    }"
  >
    <Navbar currentPage="/class-and-style-binding" />
    <h1 :class="textcolor == 'white' ? 'text-white' : 'text-red-500'">Hello</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgcolor: "yellow",
      textcolor: "asdasdasd",
    };
  },
};
</script>
