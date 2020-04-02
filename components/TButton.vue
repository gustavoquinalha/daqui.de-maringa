<template>
  <button class="btn btn-blue">
    <slot>Button</slot>
  </button>
</template>

<style>
.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-large {
  @apply py-3 px-4 text-lg;
}
</style>
