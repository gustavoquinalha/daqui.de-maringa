<template>
  <div class="antialiased text-body font-body bg-white">
    <div class="flex flex-wrap w-full">
      <div class="relative bg-white h-16 w-full"></div>
      <nav
        class="fixed top-0 left-0 z-50 flex flex-wrap items-center justify-between navbar-expand-lg bg-white w-full border-b h-16 z-100"
      >
        <div class="w-full px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="relative w-1/3 flex justify-between items-center">
            <n-link
              to="/"
              class="text-md leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-black flex items-center"
            >
              Serviços/
              <span class="block font-bold">Maringá</span>
            </n-link>
          </div>

          <div class="menu w-1/3 hidden md:flex items-center justify-center">
            <n-link
              class="btn m-2 hover:bg-gray-25 text-black whitespace-no-wrap"
              to="/app"
            >Onde comprar</n-link>
            <n-link
              class="btn m-2 hover:bg-gray-25 text-black whitespace-no-wrap"
              to="/blacklist"
            >Blacklist</n-link>
          </div>

          <div class="hidden md:flex justify-end w-1/3">
            <n-link
              class="btn-primary btn bg-purple-600 hover:bg-purple-500 text-white"
              to="/cadastro"
            >Enviar meu negócio</n-link>
          </div>

          <button
            class="cursor-pointer bg-purple-600 hover:bg-purple-500 text-white leading-none rounded-full flex flex-col items-center justify-center md:hidden w-8 h-8 focus:outline-none focus:border-purple-500"
            type="button"
            @click="showMenu = !showMenu"
          >
            <fa class="w-3 current-fill" :icon="['fa', 'bars']" v-show="!showMenu" />
            <fa class="w-3 current-fill" :icon="['fa', 'times']" v-show="showMenu" />
          </button>
          <div
            v-show="showMenu"
            class="block md:hidden bg-white border-b p-8 w-full fixed left-0 z-100 shadow"
            style="top: 4rem"
          >
            <div class="flex flex-col items-center justify-center" @click="showMenu = !showMenu">
              <n-link
                class="btn m-2 bg-gray-100 hover:bg-gray-200 text-black"
                to="/app"
              >Onde comprar</n-link>
              <n-link
                class="btn m-2 bg-gray-100 hover:bg-gray-200 text-black"
                to="/blacklist"
              >Blacklist</n-link>
              <n-link
                class="btn m-2 bg-gray-100 hover:bg-gray-200 text-black whitespace-no-wrap"
                to="/cadastro"
              >Enviar meu negócio</n-link>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <nuxt class="w-full mx-auto px-4" />
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
  },
  data() {
    return {
      showMenu: false,
      window: {
        width: 0,
        height: 0
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;

      if (window.width > 768) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    }
  }
};
</script>

<style>
*::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  padding: 4px;
}

*::-webkit-scrollbar-thumb {
  background: #ebebeb;
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb:hover {
  background: #dcdcdc;
}

.btn {
  @apply font-bold py-2 px-4 rounded-full;
}

.btn-large {
  @apply py-3 px-4 text-lg;
}

.input {
  @apply bg-white px-4 py-3 text-base w-full border rounded-full text-black;
}

.input-sm {
  @apply py-2 w-full;
}

.textarea {
  border-radius: 2rem;
  resize: none;
}

.badge {
  @apply inline-block bg-gray-900 rounded-full px-3 py-2 text-sm font-semibold text-white leading-none;
}

.badge-select {
  @apply inline-block bg-gray-100 border-2 border-gray-100 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 leading-none cursor-pointer;
  &:hover {
    @apply bg-gray-200 border-purple-600;
  }
  &.active {
    @apply bg-purple-600 border-purple-600 text-white;
  }
}

.badge-lg {
  @apply text-base;
}

.badge-black {
  @apply bg-purple-600 text-white cursor-pointer;
  &:hover {
    @apply bg-gray-900;
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
  @apply bg-gray-100 text-black;
}
</style>
