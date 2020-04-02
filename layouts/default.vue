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

.form-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-shrink: 0;
  height: 1em;
  width: 1em;
  color: #805ad5;
  background-color: #ebebeb;
  border-color: #ebebeb;
  border-width: 1px;
  border-radius: 0.25rem;
}

.form-checkbox.form-radio {
  border-radius: 50%;
}

.form-checkbox:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media not print {
  .form-checkbox::-ms-check {
    border-width: 1px;
    color: transparent;
    background: inherit;
    border-color: inherit;
    border-radius: inherit;
  }
}

.form-checkbox:focus {
  outline: none;
  /* box-shadow: 0 0 0 2px rgba(128, 90, 213,.7); */
  border-color: #805ad5;
}
</style>
