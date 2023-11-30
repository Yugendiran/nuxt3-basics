<template>
  <div>
    <Navbar currentPage="/component" />

    <Name name="Yugi" @say="greet()" />
    <Name name="asd" @say="greet()" />
    <Name name="xcvx" @say="greet()" />
    <Name name="xcvsd" @say="greet()" />
    <Name name="sdf" @say="greet()" />
    <Name />
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    greet() {
      alert("Hello !");
    },
  },
};
</script>
