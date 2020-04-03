<template>
  <div>
    <div class="w-full mx-auto">
      <div class="flex w-full">
        <div class="flex flex-wrap -m-4 flex-grow-1 w-full mx-auto my-4 md:my-4 h-full">
          <div
            class="w-full p-4"
          >
            <div
              class="card h-full rounded overflow-hidden shadow relative"
            >
              <!-- <button
                class="top-0 right-0 m-2 absolute text-gray-100 hover:text-white"
                v-if="authUser.uid"
                @click="edit(service)"
              >
                <fa class="w-4" :icon="['fa', 'edit']" />
              </button> -->
              <div class="h-64">
                <!-- Habilitar quando for image upload
                <img v-if="service.images && service.images.length"
                  class="w-full h-64 object-cover object-center"
                  :src="service.images[0].url"
                  alt="Sunset in the mountains"
                />-->
                <img
                  class="w-full h-64 object-cover object-center"
                  src="https://abrilexame.files.wordpress.com/2019/05/zaitt01.jpg"
                />
              </div>
              <div class="px-6 pt-4">
                <div class="font-bold text-xl mb-2 fill-current">Nome</div>
                <p class="text-gray-700 text-base">Descrição</p>
              </div>
              <div class="px-6 pb-4 pt-3 -mx-2">
                <span
                  class="badge m-1"
                >#tag</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
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
      delivery: [
        {
          name: "Disk entrega",
          status: true
        },
        {
          name: "Retirar em mãos",
          status: true
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
    };
  },
  computed: {
    ...mapGetters(["services"]),
    ...mapState(["authUser"])
  },
  async mounted() {
    try {
      await this.bindServices();
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
  methods: {
    ...mapActions(["bindServices"]),

    edit(service) {
      this.$router.replace({ path: `/cadastro/${service.id}` });
    }
  }
};
</script>

<style scoped>
.sidebar-relative,
.sidebar {
  width: 350px;
  min-width: 350px;
  height: calc(100vh - 64px);
}

.sidebar {
  @apply fixed left-0 bottom-0 overflow-y-auto overflow-x-hidden;
}
</style>
