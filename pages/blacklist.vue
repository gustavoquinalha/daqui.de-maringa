<template>
  <div>
    <div class="container mx-auto">
      <h1 class="font-bold text-xl mb-2">Onde não comprar</h1>

      <div class="flex flex-wrap -m-4">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4" v-for="item in items" v-bind:key="item.id">
          <div class="rounded overflow-hidden shadow-lg">
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
              <span class="badge m-1">#photography</span>
              <span class="badge m-1">#travel</span>
              <span class="badge m-1">#winter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Item 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur iure consequatur tempora ab impedit sed",
          image: ""
        },
        {
          id: 2,
          title: "Item 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur iure consequatur tempora ab impedit sed",
          image: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
