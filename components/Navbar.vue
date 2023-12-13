<template>
  <div>
    <ul class="flex gap-5">
      <li v-for="(item, index) in menuItems" :key="index">
        <NuxtLink
          :to="item.path"
          :class="{
            'font-bold': currentPage === item.path,
          }"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      menuItems: [
        {
          name: "Class and Style Binding",
          path: "/class-and-style-binding",
        },
        {
          name: "Computed Properties",
          path: "/computed-properties",
        },
        {
          name: "Conditional Rendering",
          path: "/conditional-rendering",
        },
        {
          name: "Event Handling",
          path: "/event-handling",
        },
        {
          name: "Form Input Binding",
          path: "/form-input-binding",
        },
        {
          name: "List Rendering",
          path: "/list-rendering",
        },
        {
          name: "Reactivity",
          path: "/reactivity",
        },
        {
          name: "Two Way Binding",
          path: "/two-way-binding",
        },
        {
          name: "Components",
          path: "/component",
        },
        {
          name: "CardFlip",
          path: "/card-flip-game",
        },
        {
          name: "Calculator",
          path: "/calc",
        },
      ],
    };
  },
};
</script>
