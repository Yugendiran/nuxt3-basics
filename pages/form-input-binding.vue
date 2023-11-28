<template>
  <div>
    <h1>Form input binding</h1>

    <div>
      <p>Name</p>
      <input v-model="name" class="border" type="text" />

      <br />

      <p>phone number</p>
      <input v-model="phoneNumber" class="border" type="number" />

      <br />

      <p>email</p>
      <input v-model="email" class="border" type="text" />

      <br />

      <button
        @click="
          console.log(name);
          console.log(phoneNumber);
          console.log(email);
        "
        class="mt-5 bg-red-400"
      >
        Submit
      </button>

      {{ name }}
      {{ phoneNumber }}
      {{ email }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phoneNumber: "",
      email: "",
    };
  },
};
</script>
