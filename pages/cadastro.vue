<template>
  <div>
    <h1 class="text-5xl">Cadastro</h1>
  </div>
</template>

<script>
import TButton from "~/components/TButton";

export default {
  components: {
    TButton
  }
};
</script>

<style scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
