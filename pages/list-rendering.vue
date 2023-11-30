<template>
  <div>
    <Navbar currentPage="/list-rendering" />
    <h1>Student List</h1>

    <ul>
      <li v-for="(student, index) in studentList" class="text-lg font-bold">
        {{ index + 1 }} - {{ student.name }} - {{ student.age }} -
        {{ student.section }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentList: [
        {
          name: "Yugi",
          age: 1,
          section: "Sec A",
        },
        {
          name: "asd",
          age: 2,
          section: "Sec B",
        },
        {
          name: "cvxb",
          age: 31,
          section: "Sec D",
        },
        {
          name: "cxv",
          age: 4,
          section: "Sec A",
        },
        {
          name: "dsf",
          age: 5,
          section: "Sec A",
        },
        {
          name: "sdf",
          age: 6,
          section: "Sec A",
        },
        {
          name: "sdf",
          age: 7,
          section: "Sec A",
        },
        {
          name: "sdf",
          age: 7,
          section: "Sec A",
        },
        {
          name: "sdf",
          age: 7,
          section: "Sec A",
        },
      ],
    };
  },
};
</script>
