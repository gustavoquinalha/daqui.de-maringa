<template>
  <FormNegocio />
</template>

<script>
import FormNegocio from '@/components/FormNegocio'
import { mapActions } from 'vuex'
export default {
  middleware: 'auth',
  components: {
    FormNegocio
  },
  methods: {
    ...mapActions(['bindSetting'])
  },
  async monted() {
    await this.bindSetting()
  }
}
</script>

<style scoped>
</style>
