<template>
  <div class>
    <div class="flex flex-wrap w-full">
      <div class="relative bg-white h-16 w-full"></div>
      <nav
        class="fixed top-0 left-0 z-50 flex flex-wrap items-center justify-between navbar-expand-lg bg-white w-full border-b h-16 shadow"
      >
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="relative flex justify-between items-center">
            <n-link
              to="/"
              class="text-md leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-black flex items-center"
            >
              Serviços/
              <span class="block font-bold">Maringá</span>
            </n-link>
          </div>

          <div class="menu hidden lg:flex items-center">
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
              <li class="nav-item">
                <n-link class="btn m-2 hover:bg-gray-100 text-black" to="/app">Onde comprar</n-link>
                <n-link class="btn m-2 hover:bg-gray-100 text-black" to="/blacklist">Blacklist</n-link>
              </li>
            </ul>
          </div>

          <div class="hidden lg:flex">
            <n-link
              class="btn-primary btn bg-purple-600 hover:bg-purple-500 text-white"
              to="/cadastro"
            >Adicionar meu negócio</n-link>
          </div>

          <button
            class="cursor-pointer leading-none rounded bg-purple-600 flex flex-col items-center justify-center lg:hidden w-8 h-8"
            type="button"
          >
            <span class="block w-5 bg-white rounded" style="min-height: 2px"></span>
            <span class="block w-5 bg-white rounded mt-1" style="min-height: 2px"></span>
            <span class="block w-5 bg-white rounded mt-1" style="min-height: 2px"></span>
          </button>
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
  @apply font-bold py-2 px-4 rounded-full;
}

.btn-large {
  @apply py-3 px-4 text-lg;
}

.input {
  @apply bg-white px-4 py-3 text-base w-full border rounded-full text-black;
}

.textarea {
  border-radius: 2rem;
  resize: none;
}

.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 leading-none;
}

.badge-lg {
  @apply px-4 py-3 text-base;
}

.badge-black {
  @apply bg-gray-700 text-white cursor-pointer;
  &:hover {
    @apply bg-gray-600;
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

.menu .active-link {
  @apply bg-gray-900 text-white;
}
</style>
