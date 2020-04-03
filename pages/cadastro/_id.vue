<template>
  <FormNegocio :editMode="true"/>
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
  async fetch() {
    await this.bindSetting()
  }
}
</script>

<style scoped>
</style>
