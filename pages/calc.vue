<template>
  <div>
    <Navbar currentpage="/calc"/>
    <div class="flex items-center justify-center h-screen bg-gray-200">
      <div class="p-8 bg-white rounded shadow-md">
        <div class="grid grid-cols-4 gap-4">
          <div class="col-span-4 mb-4">
            <input
              v-model="inputValues"
              type="text"
              class="w-full p-2 border border-gray-300 rounded"
              readonly
            />
          </div>
          <button class="col-span-1 btn" @click="addValue('7')">7</button>
          <button class="col-span-1 btn" @click="addValue('8')">8</button>
          <button class="col-span-1 btn" @click="addValue('9')">9</button>
          <button class="col-span-1 bg-yellow-500 btn" @click="addValue('/')">
            /
          </button>

          <button class="col-span-1 btn" @click="addValue('4')">4</button>
          <button class="col-span-1 btn" @click="addValue('5')">5</button>
          <button class="col-span-1 btn" @click="addValue('6')">6</button>
          <button class="col-span-1 bg-yellow-500 btn" @click="addValue('*')">
            *
          </button>

          <button class="col-span-1 btn" @click="addValue('1')">1</button>
          <button class="col-span-1 btn" @click="addValue('2')">2</button>
          <button class="col-span-1 btn" @click="addValue('3')">3</button>
          <button class="col-span-1 bg-yellow-500 btn" @click="addValue('-')">
            -
          </button>

          <button class="col-span-1 btn" @click="addValue('0')">0</button>
          <button class="col-span-1 btn" @click="addValue('.')">.</button>
          <button class="col-span-1 bg-yellow-500 btn" @click="calc()">
            =
          </button>
          <button class="col-span-1 bg-yellow-500 btn" @click="addValue('+')">
            +
          </button>

          <button class="col-span-2 bg-red-500 btn" @click="inputValues = ''">
            Clear
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValues: "",
    };
  },
  methods: {
    addValue(value) {
      this.inputValues += value;
    },
    calc() {
      try {
        if (eval(this.inputValues)) {
          this.inputValues = eval(this.inputValues);
        } else {
          alert("Please enter a valid calculation");
        }
      } catch {
        alert("Please enter a valid calculation");
      }
    },
  },
};
</script>
