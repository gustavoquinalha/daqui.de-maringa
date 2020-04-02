<template>
  <div>
    <div class="w-full mx-auto">
      <h1 class="font-bold text-2xl font-bold mb-4 text-center">Oque você precisa nessa quarentena?</h1>

      <div class="mb-4 flex items-center justify-center">
        <input
          type="text"
          placeholder="Exemplo: Verduras, costureira, instalação de ar-condicionado..."
          class="input max-w-500 mx-auto"
          v-model="search"
        />
      </div>
      <div class="mb-8 flex items-center justify-center flex-wrap text-center">
        <span v-for="tag in tags" class="badge badge-lg badge-black m-1" v-bind:key="tag.name">{{tag.name}}</span>
      </div>

      <div class="flex flex-wrap -m-4">
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4" v-for="service in services" v-bind:key="service.id">
          <div class="rounded overflow-hidden shadow">
            <img
              v-if="service.images && service.images.length"
              class="w-full"
              :src="service.images[0].url"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4 pb-2">
              <div class="font-bold text-xl mb-2">{{ service.nomeCompanyFantasy }}</div>
              <p
                class="text-gray-700 text-base"
              >{{ service.description }}</p>
            </div>
            <div class="px-6 py-4">
              <span class="badge m-1" v-for="tag in service.tags.filter(tag=>tag.status)" :key="tag.name">{{ `#${tag.name}` }}</span>
            </div>
            <button v-if="authUser.uid" @click="edit(service)">
              <fa class="w-10" :icon="['fa', 'edit']"/> Edit (only owner see)
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap -m-4">
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4" v-for="item in items" v-bind:key="item.id">
          <div class="rounded overflow-hidden shadow">
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
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  data() {
    return {
      search: "",
      tags: [
        {
          name: "Mercado",
          status: true
        },
        {
          name: "Farmácia",
          status: true
        },
        {
          name: "Arte",
          status: true
        },
        {
          name: "Verduras e legumes",
          status: false
        }
      ],
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
        },
        {
          id: 3,
          title: "Item 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur iure consequatur tempora ab impedit sed",
          image: ""
        },
        {
          id: 4,
          title: "Item 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur iure consequatur tempora ab impedit sed",
          image: ""
        },
        {
          id: 5,
          title: "Item 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur iure consequatur tempora ab impedit sed",
          image: ""
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['services']),
    ...mapState(['authUser'])
  },
  async mounted() {
    try {
      await this.bindServices()
    } catch (error) {
      this.$swal({
        icon: 'error',
        showConfirmButton: false,
        showCancelButton: true,
        title: 'error',
        text: error.message
      })
    }
  },
  methods: {
    ...mapActions(['bindServices']),

    edit(service) {
      this.$router.replace({ path: `/cadastro/${service.id}` })
    }
  }
}
</script>

<style scoped>
</style>
