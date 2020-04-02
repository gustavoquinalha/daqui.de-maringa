<template>
  <div class>
    <div class="flex flex-wrap w-full">
      <nav
        class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white w-full border-b shadow-md"
      >
        <div class="container mx-auto flex flex-wrap items-center justify-between">
          <div
            class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
          >
            <n-link
              to="/"
              class="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black"
            >
              servicosdaqui.em/
              <span class="font-bold">Maringá</span>
            </n-link>
            <button
              class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <span class="block relative w-6 h-px rounded-sm bg-black"></span>
              <span class="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
              <span class="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
            </button>
          </div>

          <div class="hidden lg:flex lg:flex-grow items-center" id="example-navbar-info">
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
              <li class="nav-item">
                <n-link
                  class="btn m-2 bg-gray-100 hover:bg-gray-500 text-black"
                  to="/app"
                >Onde comprar</n-link>
                <n-link
                  class="btn m-2 bg-gray-100 hover:bg-gray-500 text-black"
                  to="/blacklist"
                >Onde não comprar</n-link>
              </li>
            </ul>
          </div>

          <div class="hidden lg:flex lg:flex-grow items-center" id="example-navbar-info">
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
              <li class="nav-item">
                <n-link
                  class="btn m-2 bg-purple-600 hover:bg-purple-500 text-white"
                  to="/cadastro"
                >Adicionar meu negócio</n-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <nuxt class="container mx-auto px-4 py-8" />
  </div>
</template>

<script>
export default {
  head: {
    title: "Serviços daqui de Maringá",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://www.gstatic.com/firebasejs/ui/4.5.0/firebase-ui-auth.css"
      }
    ],
    script: [
      {
        src: "https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js",
        defer: true,
        async: true
      },
      {
        src: "https://www.gstatic.com/firebasejs/ui/4.5.0/firebase-ui-auth.js",
        defer: true,
        async: true
      }
    ]
  }
};
</script>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }

  .btn-large {
    @apply py-3 px-4 text-lg;
  }

.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
