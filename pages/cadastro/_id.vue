<template>
  <FormNegocio :editMode="true"/>
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
