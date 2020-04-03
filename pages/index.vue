<template>
  <div>
    <div class="py-8 w-full mx-auto">
      <h1 class="font-bold text-2xl font-bold mb-4 text-center">Oque você precisa nessa quarentena?</h1>

      <div class="mb-4 flex items-center justify-center max-w-600 mx-auto">
        <div class="flex items-center w-full">
          <input
            type="text"
            placeholder="Exemplo: Verduras, costureira, instalação de ar-condicionado..."
            class="input w-full mx-auto mr-2 focus:outline-none focus:bg-white focus:border-purple-500"
            v-model="search"
          />

          <div class="relative w-300">
            <select
              class="block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-lg"
            >
              <option>Marialva</option>
              <option>Maringá</option>
              <option>Cianorte</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-8 flex items-center justify-center flex-wrap text-center">
        <button
          type="button"
          v-for="tag in tags"
          class="badge badge-lg badge-select m-1 focus:outline-none focus:border-purple-500"
          :class="{active : tag.status}"
          @click="tag.status = !tag.status"
          v-bind:key="tag.name"
        >{{tag.name}}</button>
      </div>

      <div class="flex flex-wrap -m-4 flex-grow-1 w-full mx-auto h-full">
        <div
          class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
          v-for="service in services"
          v-bind:key="service.id"
        >
          <div class="card h-full rounded overflow-hidden shadow hover:shadow-lg hover:text-purple-600 relative cursor-pointer">
            <div class="top-0 left-0 p-2 absolute">
              <span
                class="badge m-1"
                v-for="tag in service.tags.filter(tag=>tag.status)"
                :key="tag.name"
              >{{ `#${tag.name}` }}</span>
            </div>
            <button
              class="top-0 right-0 m-2 absolute text-gray-100 hover:text-white"
              v-if="service.owner === authUser.uid"
              @click="edit(service)"
            >
              <fa class="w-4 text-black" :icon="['fa', 'edit']" />
            </button>
            <div class="h-64">
              <!-- Habilitar quando for image upload
                <img v-if="service.images && service.images.length"
                  class="w-full h-64 object-cover object-center"
                  :src="service.images[0].url"
                  alt="Sunset in the mountains"
              />-->
              <img
                class="w-full h-64 object-cover object-center"
                :src="service.cover"
                :alt="service.nomeCompanyFantasy"
              />
            </div>
            <div class="px-6 pt-4">
              <div class="font-bold text-xl mb-2">{{ service.nomeCompanyFantasy }}</div>
              <p class="text-gray-700 text-base">{{ service.description }}</p>
            </div>
            <div class="px-6 pb-5 pt-4 w-full">
              <n-link
                class="inline-block text-center w-full btn text-purple-600 border-2 border-purple-600 bg-white hover:bg-purple-600 hover:text-white text-white"
                to="/perfil"
              >Visualizar serviço</n-link>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 pt-8 flex items-center justify-center text-center">
        <n-link
          class="btn inline-block text-center bg-gray-200 hover:bg-gray-100 text-black"
          to="/app"
        >Mostrar todos os serviços</n-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
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
    ...mapGetters(["services"]),
    ...mapState(["authUser"])
  },
  async mounted() {
    try {
      await this.bindServices()
    } catch (error) {
      this.$swal({
        icon: "error",
        showConfirmButton: false,
        showCancelButton: true,
        title: "error",
        text: error.message
      })
    }
  },
  methods: {
    ...mapActions(["bindServices"]),

    edit(service) {
      this.$router.replace({ path: `/cadastro/${service.id}` })
    }
  }
}
</script>

<style scoped>
</style>
