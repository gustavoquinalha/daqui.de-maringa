<template>
  <div>
    <div class="w-full mx-auto">
      <div class="flex w-full">
        <div v-show="showFilter" class="sidebar-relative p-6 md:p-8 relative block"></div>
        <div v-show="showFilter" class="sidebar p-6 md:p-8 block md:border-r">
          <div class="mb-4 flex flex-col items-center justify-center relative">
            <button
              class="absolute cursor-pointer bg-gray-600 hover:bg-gray-500 text-white leading-none rounded-full flex flex-col items-center justify-center md:hidden w-8 h-8 focus:outline-none focus:border-purple-500"
              style="top: -8px; right: -8px"
              type="button"
              @click="showFilter = !showFilter"
            >
              <fa class="w-3 current-fill" :icon="['fa', 'times']" />
            </button>

            <div class="w-full mb-6">
              <span class="block text-black mb-1 font-bold">Oque você precisa?</span>
              <input
                type="text"
                placeholder="Exemplo: Verduras, costureira, instalação de ar-condicionado..."
                class="input input-sm max-w-500 mx-auto focus:outline-none focus:bg-white focus:border-purple-500"
                v-model="search"
              />
            </div>

            <div class="w-full mb-6">
              <span class="block text-black mb-1 font-bold">Cidade</span>
              <div class="relative">
                <select
                  class="block appearance-none w-full border text-gray-700 py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-lg"
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

            <div class="text-left w-full mb-6">
              <span class="block text-black mb-1 font-bold">Tags</span>
              <div class="flex items-center" v-for="t in tags" v-bind:key="t.name">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    v-model="t.status"
                    :value="t.status"
                    type="checkbox"
                    name="tags"
                    class="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                    @input="toggleTag(t)"
                  />
                  <span class="ml-2 block text-lg leading-5 text-gray-900">{{t.name}}</span>
                </label>
              </div>
            </div>

            <div class="text-left w-full mb-6">
              <span class="block text-black mb-1 font-bold">Entrega</span>
              <div class="flex items-center" v-for="delivery in deliveries" v-bind:key="delivery.name">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    v-model="delivery.status"
                    :value="delivery.status"
                    type="checkbox"
                    name="delivery"
                    class="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                    @input="toggleDelivery(delivery)"
                  />
                  <span class="ml-2 block text-lg leading-5 text-gray-900">{{delivery.name}}</span>
                </label>
              </div>
            </div>

            <div class="w-full">
              <button
                class="w-full btn md:border-0 text-purple-600 md:text-white hover:text-white border-2 border-purple-600 bg-white hover:bg-purple-600 md:bg-purple-600 md:hover:bg-purple-500 text-white w-full"
              >Filtrar resultados</button>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4 flex-grow-1 w-full mx-auto my-4 md:my-4 h-full">
          <div
            class="w-full lg:w-1/2 xl:w-1/3 p-4"
            v-for="service in filtred"
            v-bind:key="service.id"
          >
            <div
              class="card h-full rounded overflow-hidden shadow hover:shadow-lg hover:text-purple-600 relative cursor-pointer"
            >
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
                <fa class="w-4" :icon="['fa', 'edit']" />
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
                <div class="font-bold text-xl mb-2 fill-current">{{ service.name }}</div>
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
      </div>
    </div>

    <div class="relative block md:hidden p-2 h-16"></div>

    <div
      class="flex md:hidden items-center justify-center fixed bottom-0 left-0 w-full p-2 border-t bg-white z-100 h-16"
    >
      <button
        @click="showFilter = !showFilter"
        class="w-full btn bg-purple-600 hover:bg-purple-500 text-white w-full inline-block focus:outline-none focus:border-purple-500"
      >
        <span v-if="!showFilter">Mostrar filtro</span>
        <span v-if="showFilter">Esconder filtro</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      window: {
        width: 0
      },
      showFilter: true,
      search: '',
      selectedTags: [],
      selectedDeliveries: []
    };
  },
  computed: {
    ...mapGetters(['services', 'settingCities', 'settingTags', 'settingDeliveries', 'services']),
    ...mapState(['authUser', 'city']),
    tags() {
      return this.settingTags
    },
    deliveries() {
      return this.settingDeliveries
    },
    tags() {
      return this.settingTags
    },
    filtred: {
      get() {
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
      });
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ...mapActions(["bindServices", 'bindSetting']),

    edit(service) {
      this.$router.replace({ path: `/cadastro/${service.id}` });
    },

    handleResize() {
      this.window.width = window.innerWidth;

      if (this.window.width > 768) {
        this.showFilter = true;
      } else {
        this.showFilter = false;
      }
    },
    
    toggleTag(tag) {
      tag.status = !tag.status
      this.selectedTags = this.tags.filter(tag => tag.status).map(tag => tag.name)
    },
    
    toggleDelivery(delivery) {
      delivery.status = !delivery.status
      this.selectedDeliveries = this.deliveries.filter(delivery => delivery.status).map(delivery => delivery.name)
    },
  }
};
</script>

<style scoped>
.sidebar-relative,
.sidebar {
  height: calc(100vh - 64px);
}

.sidebar {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  /* height: 100%; */
}

.sidebar-relative {
  display: none;
}

@media (min-width: 768px) {
  .sidebar-relative,
  .sidebar {
    width: 350px;
    min-width: 350px;
  }

  .sidebar-relative {
    display: block;
  }
}

.sidebar {
  @apply fixed left-0 bottom-0 overflow-y-auto overflow-x-hidden z-100 bg-white;
}
</style>
