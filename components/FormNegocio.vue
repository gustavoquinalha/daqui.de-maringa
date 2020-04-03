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
            <h1 class="font-bold text-2xl text-black text-center">Adicionar meu negócio</h1>
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
            <span class="block text-black text-lg mb-2 font-bold">{{ form.description.name }}</span>
            <textarea
              maxlength="200"
              rows="5"
              :placeholder="form.description.placeholder"
              class="input textarea focus:outline-none focus:bg-white focus:border-purple-500"
              v-model="form.description.value"
            ></textarea>
            <span class="text-sm mt-2" v-text="(200 - form.description.value.length)"></span>
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.description.error"
            >{{form.description.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.registerType.name }}</span>
            <div class="flex items-center">
              <label
                class="inline-flex items-center cursor-pointer"
                for="registerType_PJ"
                @click="form.registerType.value = 'PJ'"
              >
                <input
                  :checked="form.registerType.value == 'PJ'"
                  id="registerType_PJ"
                  value="PJ"
                  type="radio"
                  name="registerType"
                  class="form-checkbox form-radio h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                />
                <span class="ml-2 block text-lg leading-5 text-gray-900">Pessoa jurídica</span>
              </label>
            </div>
            <div class="flex items-center">
              <label
                class="inline-flex items-center cursor-pointer"
                for="registerType_PF"
                @click="form.registerType.value = 'PF'"
              >
                <input
                  :checked="form.registerType.value == 'PF'"
                  id="registerType_PF"
                  value="PF"
                  name="registerType"
                  type="radio"
                  class="form-checkbox form-radio h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                />
                <span class="ml-2 block text-lg leading-5 text-gray-900">Pessoa física</span>
              </label>
            </div>
          </div>

          <div class="mb-8 text-left" v-if="form.registerType.value == 'PJ'">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.cnpj.name }}</span>
            <input
              type="text"
              :placeholder="form.cnpj.placeholder"
              class="input focus:outline-none focus:bg-white focus:border-purple-500"
              v-model="form.cnpj.value"
              @blur="loadCNPJ"
            />
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.cnpj.error"
            >{{form.cnpj.textError}}</span>
          </div>

          <div class="mb-8 text-left" v-if="form.registerType.value == 'PF'">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.cpf.name }}</span>
            <input
              type="text"
              :placeholder="form.cpf.placeholder"
              class="input focus:outline-none focus:bg-white focus:border-purple-500"
              v-model="form.cpf.value"
            />
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.cpf.error"
            >{{form.cpf.textError}}</span>
          </div>

          <div class="mb-8 text-left" v-if="!loadingCNPJ && form.registerType.value == 'PJ'">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.nameCompany.name }}</span>
            <input
              type="text"
              :placeholder="form.nameCompany.placeholder"
              class="input focus:outline-none focus:bg-white focus:border-purple-500"
              v-model="form.nameCompany.value"
            />
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.nameCompany.error"
            >{{form.nameCompany.textError}}</span>
          </div>

          <div class="mb-8 text-left" v-if="!loadingCNPJ && form.registerType.value == 'PJ'">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.nameCompanyFantasy.name }}</span>
            <input
              type="text"
              :placeholder="form.nameCompanyFantasy.placeholder"
              class="input focus:outline-none focus:bg-white focus:border-purple-500"
              v-model="form.nameCompanyFantasy.value"
            />
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.nameCompanyFantasy.error"
            >{{form.nameCompanyFantasy.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.cep.name }}</span>
            <input
              type="text"
              :placeholder="form.cep.placeholder"
              class="input focus:outline-none focus:bg-white focus:border-purple-500"
              v-model="form.cep.value"
            />
            <!-- <PlaceField
              :placeholder="form.cep.placeholder"
              class="input focus:outline-none focus:bg-white focus:border-purple-500"
              v-model="form.cep.value"
            /> -->
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.cep.error"
            >{{form.cep.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.cities.name }}</span>
            <div
              class="flex items-center"
              v-for="city in form.cities.value"
              v-bind:key="city.name"
            >
              <label class="inline-flex items-center cursor-pointer">
                <input
                  v-model="city.status"
                  :value="city.status"
                  type="checkbox"
                  name="radio"
                  class="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                />
                <span class="ml-2 block text-lg leading-5 text-gray-900">{{city.name}}</span>
              </label>
            </div>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.delivery.name }}</span>
            <div
              class="flex items-center"
              v-for="dlvr in form.delivery.value"
              v-bind:key="dlvr.name"
            >
              <label class="inline-flex items-center cursor-pointer">
                <input
                  v-model="dlvr.status"
                  :value="dlvr.status"
                  type="checkbox"
                  name="radio"
                  class="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                />
                <span class="ml-2 block text-lg leading-5 text-gray-900">{{dlvr.name}}</span>
              </label>
            </div>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.tags.name }}</span>
            <div class="flex items-center" v-for="tag in form.tags.value" v-bind:key="tag.name">
              <label class="inline-flex items-center cursor-pointer">
                <input
                  v-model="tag.status"
                  :value="tag.status"
                  type="checkbox"
                  name="radio"
                  class="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                />
                <span class="ml-2 block text-lg leading-5 text-gray-900">{{tag.name}}</span>
              </label>
            </div>
          </div>

          <!-- Habilitar quando for image upload <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.images.name }}</span>
            <input type="file" multiple :placeholder="form.images.placeholder" class="input focus:outline-none focus:bg-white focus:border-purple-500" @change="fileChange" />
            <div
              v-for="(fileObj, index) in files"
              :key="index"
            >
              {{ fileObj.loading }}
              <br />
              {{ fileObj.file.name }}
            </div>
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.images.error"
            >{{form.images.textError}}</span>
          </div>-->

          <div class="text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.cover.name }}</span>
            <input
              type="text"
              :placeholder="form.cover.placeholder"
              class="input focus:outline-none focus:bg-white focus:border-purple-500"
              v-model="form.cover.value"
            />
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.cover.error"
            >{{form.cover.textError}}</span>
          </div>
        </div>

        <div class="w-full lg:max-w-400 mx-auto py-8">
          <div class="card rounded overflow-hidden shadow hover:shadow-lg hover:text-purple-600 relative cursor-pointer">
            <div class="top-0 left-0 p-2 absolute">
              <span
                class="badge m-1"
                v-for="tag in form.tags.value.filter(tag => tag.status)"
                :key="tag.name"
              >{{ `#${tag.name}` }}</span>
            </div>
            <img
              class="w-full"
              :src="form.cover.value"
              alt="Sunset in the mountains"
            />
            <div class="px-6 pt-3 pb-5">
              <div
                class="font-bold text-xl mb-2 fill-current"
              >{{form.name.value ? form.name.value : 'Nome do negócio'}}</div>
              <p
                class="text-gray-700 text-base"
              >{{form.description.value ? form.description.value : 'Descrição sobre o negócio'}}</p>
            </div>
          </div>
          <button
            v-if="editMode"
            @click="update"
            class="btn btn-large bg-green-600 hover:bg-green-500 text-white w-full mt-8"
          >Atualizar</button>
          <button
            v-else
            @click="add"
            class="btn btn-large bg-green-600 hover:bg-green-500 text-white w-full mt-8"
          >Adicionar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import jsonpAdapter from 'axios-jsonp'
import Auth from '@/components/Auth'
import PlaceField from '@/components/PlaceField'

export default {
  props: {
    editMode: false
  },
  components: {
    Auth,
    PlaceField
  },
  data() {
    return {
      form: {
        owner: {
          value: ''
        },
        name: {
          name: 'Nome',
          value: '',
          placeholder: 'Nome do negocio',
          error: false,
          textError: ''
        },
        description: {
          name: 'Description',
          value: '',
          placeholder: 'Descrição',
          error: false,
          textError: ''
        },
        registerType: {
          name: 'Tipo do cadastro',
          value: 'PJ',
          placeholder: 'Tipo de pessoa',
          error: false,
          textError: ''
        },
        cnpj: {
          name: 'CNPJ',
          value: '',
          placeholder: 'Documetno CNPJ',
          error: false,
          textError: ''
        },
        cpf: {
          name: 'CPF',
          value: '',
          placeholder: 'Documento CPF',
          error: false,
          textError: ''
        },
        nameCompany: {
          name: 'Nome da sua empresa',
          value: '',
          placeholder: 'Placeholder nome empresa',
          error: false,
          textError: 'Erro nome empresa'
        },
        nameCompanyFantasy: {
          name: 'Nome fantasia da sua empresa',
          value: '',
          placeholder: 'Nome fantasia',
          error: false,
          textError: ' fantasia'
        },
        cep: {
          name: 'CEP',
          value: '',
          placeholder: 'Endereço de CEP',
          error: false,
          textError: ''
        },
        cities: {
          name: 'Cidades de atuação',
          value: [],
          error: false,
          placeholder: 'Cidade',
          textError: ''
        },
        delivery: {
          name: 'Tipos de entrega',
          value: [],
          error: false,
          textError: ''
        },
        tags: {
          name: 'Hashtags',
          value: [],
          error: false,
          textError: ''
        },
        cover: {
          name: 'Foto da capa',
          value: 'https://tailwindcss.com/img/card-top.jpg',
          placeholder: 'URL da foto da capa',
          error: false,
          textError: ''
        }
        // Habilitar quando for image upload
        // images: {
        //   name: 'Imagens',
        //   value: '',
        //   error: false,
        //   textError: 'Erro images'
        // }
      },
      files: [],
      serviceId: '',
      loadingCNPJ: false
    }
  },
  async mounted() {
    try {
      if (this.editMode) {
        const { id } = this.$route.params
    
        await this.bindServices()

        // find and clone deep
        let service = JSON.stringify(this.services.find(serv => serv.id === id) || {})
        service = JSON.parse(service)
    
        this.images = service.images
        this.form.tags.value = [...this.settingTags]
        this.form.delivery.value = [...this.settingDeliveries]
    
        for (const key in service) {
          if (service.hasOwnProperty(key)) {
            let value = service[key]

            if (key === 'tags') {
              value = this.settingTags.map(tag => {
                tag.status = value.map(v => v.name).filter(v => v).includes(tag.name)
                return tag
              })
            }
            
            if (key === 'delivery') {
              value = this.settingDeliveries.map(delivery => {
                delivery.status = value.map(v => v.name).filter(v => v).includes(delivery.name)
                return delivery
              })
            }
    
            if(this.form[key]) {
              this.form[key].value = value
            }
          }
        }
      } else {
        // create mode
        this.form.tags.value = [...this.settingTags]
        this.form.delivery.value = [...this.settingDeliveries]
      }
      
      this.form = this.form
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
    ...mapGetters(['services', 'isLogged', 'settingDeliveries', 'settingTags']),
  },
  methods: {
    ...mapActions(['bindServices']),
    
    async add() {
      try {
        const fields = Object.keys(this.form)

        const fieldValues = fields.reduce((obj, prop) => {
          const value = this.form[prop].value
          const newObj = { ...obj }

          if (value) {
            newObj[prop] = value
          }

          return newObj
        }, {})

        const docRef = await this.$fireStore.collection('services').doc()

        fieldValues.id = docRef.id
        fieldValues.owner = this.authUser.uid
        fieldValues.tags = fieldValues.tags
        fieldValues.delivery = fieldValues.delivery.filter(delivery => delivery.status)

        await docRef.set(fieldValues)

        this.$swal({
          icon: 'success',
          showConfirmButton: true,
          showCancelButton: false,
          title: 'Muito bom!',
          text: 'Seu serviço foi criado com sucesso :)'
        }).then(() => {
          this.$router.replace({ path: `/cadastro/${docRef.id}`})
        })

        // Habilitar quando for image upload
        // this.serviceId = docRef.id
        // await Promise.all(
        //   Array.prototype.map.call(this.files, this.uploadImageAsPromise)
        // ).then(async result => {

        //   await docRef.update({ images: this.files.map(file => ({ url: file.url, metadata: file.metadata })) })

        //   this.$swal({
        //     icon: 'success',
        //     showConfirmButton: true,
        //     showCancelButton: false,
        //     title: 'Muito bom!',
        //     text: 'Seu serviço foi criado com sucesso :)'
        //   })
        // })
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

    async update() {
      try {
        const { id } = this.$route.params
        const fields = Object.keys(this.form)

        const fieldValues = fields.reduce((obj, prop) => {
          return  {
            ...obj,
            [prop]: this.form[prop].value
          }
        }, {})

        fieldValues.id = id
        fieldValues.owner = this.authUser.uid
        fieldValues.tags = fieldValues.tags
        fieldValues.delivery = fieldValues.delivery.filter(delivery => delivery.status)

        const docRef = await this.$fireStore.collection('services').doc(id).set(fieldValues)

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

    fileChange(event) {
      const { files } = event.target
      this.files = Array.prototype.map.call(files, file => ({ file }))
    },

    uploadImageAsPromise(fileObj, index) {
      const { file } = fileObj
      return new Promise((resolve, reject) => {
        const storageRef = this.$fireStorage.ref(
          `${this.serviceId}/${file.name}-${index}`
        )
        const task = storageRef.put(file)

        task.on(
          'state_changed',
          snapshot => {
            const percentage =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            fileObj.loading = percentage
            this.files = this.files.map((_fileObj_, _index_) => {
              if (_index_ === index) {
                return fileObj
              }
              return _fileObj_
            })
          },
          err => {
            reject(err)
          },
          async () => {
            fileObj.url = await task.snapshot.ref.getDownloadURL()
            const {
              type,
              generation,
              fullPath,
              name,
              size,
              timeCreated,
              contentType
            } = task.snapshot.metadata
            fileObj.metadata = {
              type,
              generation,
              fullPath,
              name,
              size,
              timeCreated,
              contentType
            }
            this.files = this.files.map((_fileObj_, _index_) => {
              if (_index_ === index) {
                return fileObj
              }
              return _fileObj_
            })
            resolve(fileObj)
          }
        )
      })
    },

    async loadCNPJ(event) {
      try {
        const { value } = event.target
        
        if (!value) {
          return false
        }

        this.loadingCNPJ = true
        const { data } = await this.$axios({
          method: 'GET',
          url: `https://www.receitaws.com.br/v1/cnpj/${value}?`,
          adapter: jsonpAdapter
        })

        const form = this.form
        
        form.nomeCompany.value = data.fantasia
        form.nameCompanyFantasy.value = data.fantasia
        form.cep.value = data.cep
        form.empresa = {
          value: data
        }
        
        this.form = { ...form }
      } catch (error) {
        this.$swal({
          icon: 'error',
          showConfirmButton: false,
          showCancelButton: true,
          title: 'error',
          text: error.message
        })
      } finally {
        this.loadingCNPJ = false
      }
    }
  }
}
</script>

<style scoped>
</style>
