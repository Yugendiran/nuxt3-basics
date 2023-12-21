import { baseURL } from "nuxt/dist/core/runtime/nitro/paths";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","@nuxt-alt/http"],
  http:{
    baseURL:"http://localhost:5000",
    credentials:"omit",
    browserBaseURL :"http://localhost:5000",
  },
  app: {
    head: {
      title: "nuxt-basics",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
        },
      ],
    },
  },
});
