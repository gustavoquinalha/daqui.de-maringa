<template>
  <div>
    <h1 class="text-5xl">Pagina inicial</h1>
    <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4 pb-2">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p
          class="text-gray-700 text-base"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div class="px-6 py-4">
        <span class="badge mr-2">#photography</span>
        <span class="badge mr-2">#travel</span>
        <span class="badge">#winter</span>
      </div>
    </div>
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
</style>
