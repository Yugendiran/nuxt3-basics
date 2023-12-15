<template>
  <div class="grid w-full h-screen grid-cols-2 gap-5">
    <div class="flex flex-col items-center justify-center w-full h-full">
      <div
        v-if="!name1IsVisible"
        class="flex flex-col items-center justify-center"
      >
        <div>
          <p class="text-xl font-bold text-center">Person 1 Name</p>
          <input
            v-model="name1"
            type="text"
            class="px-2 py-1 mx-auto my-5 border rounded-lg"
            placeholder="Name"
          />
        </div>

        <button
          @click="name1IsVisible = true"
          class="px-3 py-1 mx-auto text-white rounded-lg bg-slate-400"
        >
          Submit
        </button>
      </div>
      <div
        v-else
        class="container max-w-md p-4 mx-auto my-8 bg-white rounded-lg shadow-md"
      >
        <div class="mb-4">
          <div class="flex items-center justify-between">
            <div class="text-lg font-semibold">Chat Room</div>
            <div class="text-sm text-gray-500">Online</div>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-300">
          <div v-for="(message, index) in messages" :key="index">
            <div v-if="message.name == name2" class="flex items-start mb-4">
              <div class="ml-3">
                <div class="font-semibold">{{ message.name }}</div>
                <div class="text-gray-600">{{ message.text }}</div>
              </div>
            </div>

            <div v-else class="flex items-end justify-end mb-4">
              <div class="mr-3">
                <div class="font-semibold text-right">{{ message.name }}</div>
                <div class="text-gray-600">
                  {{ message.text }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <input
            v-model="message1"
            type="text"
            placeholder="Type your message..."
            class="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            @click="sendMessage('one')"
            class="px-4 py-2 ml-2 text-white bg-blue-500 rounded-full"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full h-full">
      <div
        v-if="!name2IsVisible"
        class="flex flex-col items-center justify-center"
      >
        <div>
          <p class="text-xl font-bold text-center">Person 2 Name</p>
          <input
            v-model="name2"
            type="text"
            class="px-2 py-1 mx-auto my-5 border rounded-lg"
            placeholder="Name"
          />
        </div>

        <button
          @click="name2IsVisible = true"
          class="px-3 py-1 mx-auto text-white rounded-lg bg-slate-400"
        >
          Submit
        </button>
      </div>
      <div
        v-else
        class="container max-w-md p-4 mx-auto my-8 bg-white rounded-lg shadow-md"
      >
        <div class="mb-4">
          <div class="flex items-center justify-between">
            <div class="text-lg font-semibold">Chat Room</div>
            <div class="text-sm text-gray-500">Online</div>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-300">
          <div v-for="(message, index) in messages" :key="index">
            <div v-if="message.name == name1" class="flex items-start mb-4">
              <div class="ml-3">
                <div class="font-semibold">{{ message.name }}</div>
                <div class="text-gray-600">{{ message.text }}</div>
              </div>
            </div>

            <div v-else class="flex items-end justify-end mb-4">
              <div class="mr-3">
                <div class="font-semibold text-right">{{ message.name }}</div>
                <div class="text-gray-600">
                  {{ message.text }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <input
            v-model="message2"
            type="text"
            placeholder="Type your message..."
            class="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            @click="sendMessage('two')"
            class="px-4 py-2 ml-2 text-white bg-blue-500 rounded-full"
          >
            Send
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
      name1: "",
      name2: "",
      name1IsVisible: false,
      name2IsVisible: false,
      message1: "",
      message2: "",
      messages: [],
    };
  },
  methods: {
    sendMessage(person) {
      if (person == "one") {
        this.messages.push({
          name: this.name1,
          text: this.message1,
        });

        this.message1 = "";
      } else {
        this.messages.push({
          name: this.name2,
          text: this.message2,
        });

        this.message2 = "";
      }
    },
  },
};
</script>
