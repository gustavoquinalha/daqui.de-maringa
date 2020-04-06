<template>
  <div>
    <div class="container mx-auto">
      
      <div v-if="!isLogged" class="w-full">
        <Auth />
      </div>
      
      <div v-else class="flex flex-wrap flex-col lg:flex-row">
        <div
          class="flex flex-col flex-1 lg:mr-4 lg:pr-8 overflow-y-auto py-8"
          style="height: calc(100vh - 64px)"
        >
          <div class="mb-8 text-left">
            <h1 class="font-bold text-2xl text-black text-center">Settings</h1>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{form.name.name}}</span>
            <input
              type="text"
              :placeholder="form.name.placeholder"
              class="input focus:outline-none focus:bg-white focus:border-purple-500"
              v-model="form.name.value"
            />
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.name.error"
            >{{form.name.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.delivery.name }}</span>
            <input type="text" v-model="delivery" placeholder="Delivery Name">
            <button @click="addDelivery">Add</button>
            <div
              class="flex items-center"
              v-for="dlvr in form.delivery.value"
              v-bind:key="dlvr.name"
            >
              <label class="inline-flex items-center cursor-pointer">
                <span class="ml-2 block text-lg leading-5 text-gray-900">{{dlvr.name}}</span>
              </label>
            </div>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.tags.name }}</span>
            <input type="text" v-model="tag" placeholder="Tag Name">
            <button @click="addTag">Add</button>
            <div
              class="flex items-center"
              v-for="tag in form.tags.value"
              v-bind:key="tag.name"
            >
              <label class="inline-flex items-center cursor-pointer">
                <span class="ml-2 block text-lg leading-5 text-gray-900">{{tag.name}}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="w-full lg:max-w-400 mx-auto py-8">
          <button
            @click="update"
            class="btn btn-large bg-green-600 hover:bg-green-500 text-white w-full mt-8"
          >Atualizar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Auth from '@/components/Auth'

export default {
  components: {
    Auth
  },
  middleware: 'auth',
  data() {
    return {
      form: {
        name: {
          name: 'Nome',
          value: '',
          placeholder: 'Placeholder nome',
          error: false,
          textError: 'Erro name'
        },
        delivery: {
          name: 'Entrega',
          value: [
          ],
          error: false,
          textError: 'Erro tags'
        },
        tags: {
          name: 'Tags',
          value: [
          ],
          error: false,
          textError: 'Erro tags'
        },
      },
      tag: '',
      delivery: ''
    }
  },
  async mounted() {
    try {
      await this.bindSetting()

      let setting = JSON.stringify(this.setting || {})
      setting = JSON.parse(setting)
  
      for (const key in setting) {
        if (setting.hasOwnProperty(key)) {
          const value = setting[key]
  
          if(this.form[key]) {
            this.form[key].value = value
          }
        }
      }
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
  computed: {
    ...mapState(['authUser']),
    ...mapGetters(['setting', 'isLogged'])
  },
  methods: {
    ...mapActions(['bindSetting']),

    async update() {
      try {
        const fields = Object.keys(this.form)

        const fieldValues = fields.reduce((obj, prop) => {
          return  {
            ...obj,
            [prop]: this.form[prop].value
          }
        }, {})

        const docRef = await this.$fireStore.collection('settings').doc('default').set(fieldValues)

        this.$swal({
          icon: 'success',
          showConfirmButton: true,
          showCancelButton: false,
          title: 'Muito bom!',
          text: 'Seu serviço foi atualizado com sucesso :)'
        })
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

    addDelivery() {
      let newForm = this.form
      let deliveries = newForm.delivery.value || []

      deliveries.push({
        name: this.delivery
      })
      
      newForm.delivery.value = deliveries

      this.form = newForm
      this.delivery = ''
    },

    addTag() {
      let newForm = this.form
      let tags = newForm.tags.value || []

      tags.push({
        name: this.tag
      })
      
      newForm.tags.value = tags

      this.form = newForm
      this.tag = ''
    },
  }
}
</script>

<style scoped>
</style>

