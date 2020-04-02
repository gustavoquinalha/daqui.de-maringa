<template>
  <div class>
    <div class="w-full p-2 flex items-center justify-center">
      <n-link class="btn m-2 bg-purple-600 hover:bg-purple-500 text-white" to="/">index</n-link>
      <n-link class="btn m-2 bg-purple-600 hover:bg-purple-500 text-white" to="/app">app</n-link>
      <n-link class="btn m-2 bg-purple-600 hover:bg-purple-500 text-white" to="/cadastro">cadastro</n-link>
      <n-link class="btn m-2 bg-purple-600 hover:bg-purple-500 text-white" to="/admin">admin</n-link>
      <n-link class="btn m-2 bg-purple-600 hover:bg-purple-500 text-white" to="/auth">auth</n-link>
    </div>

    <nuxt class="container mx-auto pt-4" />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Serviços daqui de Maringá',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://www.gstatic.com/firebasejs/ui/4.5.0/firebase-ui-auth.css'
      }
    ],
    script: [
      {
        src: 'https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js',
        defer: true,
        async: true
      },
      {
        src: 'https://www.gstatic.com/firebasejs/ui/4.5.0/firebase-ui-auth.js',
        defer: true,
        async: true
      }
    ]
  }
}
</script>
