<template>
  <div class="h-screen w-full bg-black flex justify-center items-center">
    <div class="h-auto max-h-[80%] w-[400px] bg-white/10 rounded-3xl p-5">
      <h1 class="text-white text-2xl font-bold">Nuxt3 Tailwind Todo app</h1>

      <div class="mt-5">
        <div
          v-for="(todo, index) in todoLists"
          :key="index"
          class="flex gap-3 items-center text-white"
        >
          <input
            @change="todo.isCompleted = !todo.isCompleted"
            type="checkbox"
          />
          <p
            @dblclick="removeTodo(index)"
            :class="{
              'line-through': todo.isCompleted,
            }"
          >
            {{ todo.value }}
          </p>
        </div>

        <div class="mt-5">
          <input
            v-model="inputTodo"
            type="text"
            class="w-full h-12 px-4 rounded-lg bg-white/20 text-white"
            placeholder="Enter your task"
            @keypress.enter="addTodo()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoLists: [],
      inputTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.inputTodo == "") {
        alert("Please enter your task");
      } else {
        this.todoLists.push({
          value: this.inputTodo,
          isCompleted: false,
        });

        this.inputTodo = "";
      }
    },
    removeTodo(index) {
      this.todoLists.splice(index, 1);
    },
  },
};
</script>
