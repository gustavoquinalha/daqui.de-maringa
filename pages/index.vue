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
              @input="event => $store.commit('SET_CITY', event.target.value)"
              class="block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-lg"
            >
              <option
                v-for="c in settingCities"
                :key="c.name"
                :selected="c.name === city"
                :value="c.name"
              >{{ c.name }}</option>
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
          v-for="tag in settingTags"
          class="badge badge-lg badge-select m-1 focus:outline-none focus:border-purple-500"
          :class="{active : tag.status}"
          @click="toggleTag(tag)"
          v-bind:key="tag.name"
        >{{tag.name}}</button>
      </div>

      <div class="flex flex-wrap -m-4 flex-grow-1 w-full mx-auto h-full">
        <div
          class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
          v-for="service in filtred"
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
                :alt="service.name"
              />
            </div>
            <div class="px-6 pt-4">
              <div class="font-bold text-xl mb-2">{{ service.name }}</div>
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
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  fetch({ store }) {
    if (window.location.pathname.length <= 1) {
      window.history.pushState('', '', `/${store.state.city}`)
    } 
  },
  components: {},
  data() {
    return {
      search: '',
      selectedTags: [],
      selectedDeliveries: []
    }
  },
  computed: {
    ...mapGetters(['services', 'settingCities', 'settingTags', 'services']),
    ...mapState(['authUser', 'city']),
    deliveries() {
      return this.settingDeliveries
    },
    tags() {
      return this.settingTags
    },
    filtred() {
      let filtred = this.services

      filtred = filtred.filter(row => {
        return this.search ? String(row.name).toLowerCase().indexOf(String(this.search).toLowerCase()) != -1 : true
      })

      if (this.selectedTags.length) {
        filtred = filtred.filter(service => {
          return service.tags.find(tag => this.selectedTags.includes(tag.name))
        })
      }

      if (this.selectedDeliveries.length) {
        filtred = filtred.filter(service => {
          return service.delivery.find(delivery => this.selectedDeliveries.includes(delivery.name))
        })
      }

      return filtred
    }
  },
  mounted() {
    try {
      this.bindSetting()
      this.bindServices()
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
    ...mapActions(["bindServices", 'bindSetting']),

    edit(service) {
      this.$router.replace({ path: `/cadastro/${service.id}` })
    },
    
    toggleTag(tag) {
      tag.status = !tag.status
      this.selectedTags = this.tags.filter(tag => tag.status).map(tag => tag.name)
    },
    
    toggleDelivery(delivery) {
      delivery.status = !delivery.status
      this.selectedDeliveries = this.deliveries.filter(delivery => delivery.status).map(delivery => delivery.name)
    },
  },
  watch: {
    city(val) {
      window.history.pushState('', '', `/${val}`)
    }
  }
}
</script>

<style scoped>
</style>
