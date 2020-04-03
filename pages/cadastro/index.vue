<template>
  <FormNegocio />
</template>

<script>
import FormNegocio from '@/components/FormNegocio'
export default {
  middleware: 'auth',
  components: {
    FormNegocio
  }
}
</script>

<style scoped>
</style>
