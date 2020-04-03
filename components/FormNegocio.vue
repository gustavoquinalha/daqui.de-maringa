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

          <div class="mb-8 text-left" v-if="!loadingCNPJ">
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

          <div class="mb-8 text-left" v-if="!loadingCNPJ">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.nomeCompanyFantasy.name }}</span>
            <input
              type="text"
              :placeholder="form.nomeCompanyFantasy.placeholder"
              class="input focus:outline-none focus:bg-white focus:border-purple-500"
              v-model="form.nomeCompanyFantasy.value"
            />
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.nomeCompanyFantasy.error"
            >{{form.nomeCompanyFantasy.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.cep.name }}</span>
            <input
              type="text"
              :placeholder="form.cep.placeholder"
              class="input focus:outline-none focus:bg-white focus:border-purple-500"
              v-model="form.cep.value"
            />
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.cep.error"
            >{{form.cep.textError}}</span>
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
                v-for="tag in form.tags.value.filter(tag=>tag.status)"
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
              >{{form.nameCompany.value ? form.nameCompany.value : 'Nome da empresa'}}</div>
              <p
                class="text-gray-700 text-base"
              >{{form.description.value ? form.description.value : 'Descrição'}}</p>
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

export default {
  props: {
    editMode: false
  },
  components: {
    Auth
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
          placeholder: 'Placeholder nome',
          error: false,
          textError: 'Erro name'
        },
        lastName: {
          name: 'Sobrenome',
          value: '',
          placeholder: 'Placeholder sobrenome',
          error: false,
          textError: 'Erro sobrenome'
        },
        description: {
          name: 'Description',
          value: '',
          placeholder: 'Placeholder description',
          error: false,
          textError: 'Erro description'
        },
        registerType: {
          name: 'Tipo do cadastro',
          value: 'PJ',
          placeholder: 'Placeholder seila',
          error: false,
          textError: 'Erro seila'
        },
        cnpj: {
          name: 'CNPJ',
          value: '',
          placeholder: 'Placeholder CNPJ',
          error: false,
          textError: 'Erro CNPJ'
        },
        cpf: {
          name: 'CPF',
          value: '',
          placeholder: 'Placeholder CPF',
          error: false,
          textError: 'Erro CPF'
        },
        nameCompany: {
          name: 'Nome da sua empresa',
          value: '',
          placeholder: 'Placeholder nome empresa',
          error: false,
          textError: 'Erro nome empresa'
        },
        nomeCompanyFantasy: {
          name: 'Nome da sua empresa fantasia',
          value: '',
          placeholder: 'Placeholder nome fantasia',
          error: false,
          textError: 'Erro nome fantasia'
        },
        cep: {
          name: 'CEP',
          value: '',
          placeholder: 'Placeholder cep',
          error: false,
          textError: 'Erro cep'
        },
        delivery: {
          name: 'Entrega',
          value: [
            {
              name: 'Disk entrega',
              status: true
            },
            {
              name: 'Retirar em mãos',
              status: true
            }
          ],
          error: false,
          textError: 'Erro tags'
        },
        tags: {
          name: 'Tags',
          value: [
            {
              name: 'Mercado',
              status: true
            },
            {
              name: 'Farmácia',
              status: true
            },
            {
              name: 'Arte',
              status: true
            },
            {
              name: 'Verduras e legumes',
              status: false
            }
          ],
          error: false,
          textError: 'Erro tags'
        },
        cover: {
          name: 'Foto da capa',
          value: 'https://tailwindcss.com/img/card-top.jpg',
          placeholder: 'URL da foto da capa',
          error: false,
          textError: 'Erro na foto da capa'
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
        await this.bindServices()
        
        const { id } = this.$route.params
    
        // find and clone deep
        let service = JSON.stringify(this.services.find(serv => serv.id === id) || {})
        service = JSON.parse(service)
    
        this.images = service.images
    
        for (const key in service) {
          if (service.hasOwnProperty(key)) {
            const value = service[key]
    
            if(this.form[key]) {
              this.form[key].value = value
            }
          }
        }
      } else {
        // create mode
        this.form.name.value = this.authUser.displayName
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
    ...mapGetters(['services', 'isLogged'])
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
        fieldValues.owner = this.authUser.uid || 'NQvzSJoT5Ua8B00HnF4FpD2rqZu2'

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
        
        form.nameCompany.value = data.nome
        form.nomeCompanyFantasy.value = data.fantasia
        form.cep.value = data.cep
        
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
