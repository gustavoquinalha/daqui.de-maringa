
<template>
  <div>
    <h1 class="text-5xl">Pagina inicial</h1>
  </div>
</template>

<script>
export default {
    fetch ({ params, redirect }) {
    redirect(301, '/app')
  }
}
</script>

<style scoped>
</style>
