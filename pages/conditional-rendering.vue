<template>
  <div>
    <Navbar currentPage="/conditional-rendering" />
    <p>Hello! {{ name }}</p>
    <p v-if="role == 'admin'">You are a admin</p>
    <p v-else-if="role == 'teacher'">You are a teacher</p>
    <p v-else-if="role == 'student'">You are a student</p>
    <p v-else-if="role == 'parent'">You are a parent</p>
    <p v-else>You are a guest</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Yugi",
      role: "admin",
    };
  },
};
</script>
