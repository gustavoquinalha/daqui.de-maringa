<template>
  <div class>
    <div class="w-full p-2 flex items-center justify-center">
      <n-link class="btn m-2 bg-purple-600 hover:bg-purple-500 text-white" to="/">index</n-link>
      <n-link class="btn m-2 bg-purple-600 hover:bg-purple-500 text-white" to="/app">app</n-link>
      <n-link class="btn m-2 bg-purple-600 hover:bg-purple-500 text-white" to="/cadastro">cadastro</n-link>
    </div>

    <nuxt class="container mx-auto pt-4" />
  </div>
</template>

<script>
export default {
  head: {
    title: "Nuxt.js with TailwindCSS",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js with TailwindCSS example"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  }
};
</script>
