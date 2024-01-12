<template>
  <div class="flex items-center justify-center w-full h-screen bg-black">
    <div class="h-auto max-h-[80%] w-[400px] bg-white/10 rounded-3xl p-5">
      <h1 class="text-2xl font-bold text-white">Nuxt3 Tailwind Todo app....</h1>

      <div class="mt-5">
        <div
          v-for="(todo, index) in todoLists"
          :key="index"
          class="flex items-center gap-3 text-white"
        >
          <input
            @change="updatetodo(index)"
            type="checkbox"
          />
          <p
            @dblclick="removeTodo(index)"
            :class="{
              'line-through': todo.isCompleted,
            }"
          >
            {{ todo.text }}
          </p>
        </div>

        <div class="mt-5">
          <input
            v-model="inputTodo"
            type="text"
            class="w-full h-12 px-4 text-white rounded-lg bg-white/20"
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
  mounted(){
    this.gettask();
  },
  methods: {
    gettask(){
      this.$http.$get('/task/').then((res)=>{
        this.todoLists = res.task;
      });
    },
    addTodo() {
      if (this.inputTodo == "") {
        alert("Please enter your task");
      } else {
      this.$http.$post("/task/add",{
        body:{
          text : this.inputTodo,
        },
      })
      .then((res)=>{
        if(res.success){
          this.gettask();
          this.inputTodo='';
        }
        else{
          alert(res.message);
        }
      });

    }
    },
    updatetodo(index){
      this.$http.$put(`/task/update/${this.todoLists[index].id}`,{
        body:{
          text : this.todoLists[index].text,
          isCompleted : !this.todoLists[index].isCompleted,
        }
      }).then((res)=>{
        if(res.success){
          this.gettask();
          this.inputTodo='';
        }
        else{
          alert(res.message);
        }
      });
    },
    removeTodo(index) {
      this.$http.$delete("/task/delete/"+this.todoLists[index].id)
      .then((res)=>{
        if(res.success){
          this.gettask();
        }
        else{
          alert(res.message);
        }
        
      });
    },
  },
};
</script>
