<template>
  <div>
    <div class>
      <div class="flex flex-wrap flex-col lg:flex-row">
        <div class="flex flex-col flex-1 lg:mr-8 lg:pr-8 overflow-y-auto" style="height: calc(100vh - 130px)">
          <div class="mb-8 text-left">
            <h1 class="font-bold text-2xl text-purple-600">Adicionar meu negócio</h1>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{form.name.name}}</span>
            <input type="text" :placeholder="form.name.placeholder" class="input" v-model="form.name.value" />
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.name.error"
            >{{form.name.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.lastName.name }}</span>
            <input type="text" :placeholder="form.lastName.placeholder" class="input" v-model="form.lastName.value"/>
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.lastName.error"
            >{{form.lastName.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.description.name }}</span>
            <textarea rows="5" :placeholder="form.description.placeholder" class="input textarea" v-model="form.description.value"/></textarea>
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

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.cnpj.name }}</span>
            <input type="text" :placeholder="form.cnpj.placeholder" class="input" v-model="form.cnpj.value"/>
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.cnpj.error"
            >{{form.cnpj.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.cpf.name }}</span>
            <input type="text" :placeholder="form.cpf.placeholder" class="input" v-model="form.cpf.value"/>
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.cpf.error"
            >{{form.cpf.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.nameCompany.name }}</span>
            <input type="text" :placeholder="form.nameCompany.placeholder" class="input" v-model="form.nameCompany.value"/>
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.nameCompany.error"
            >{{form.nameCompany.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.nomeCompanyFantasy.name }}</span>
            <input type="text" :placeholder="form.nomeCompanyFantasy.placeholder" class="input" v-model="form.nomeCompanyFantasy.value"/>
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.nomeCompanyFantasy.error"
            >{{form.nomeCompanyFantasy.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.cep.name }}</span>
            <input type="text" :placeholder="form.cep.placeholder" class="input" v-model="form.cep.value"/>
            <span
              class="block text-red-600 text-sm mt-2 font-bold"
              v-if="form.cep.error"
            >{{form.cep.textError}}</span>
          </div>

          <div class="mb-8 text-left">
            <span class="block text-black text-lg mb-2 font-bold">{{ form.delivery.name }}</span>
            <div class="flex items-center" v-for="dlvr in form.delivery.value" v-bind:key="dlvr.name">
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

          <button
            class="btn btn-large bg-purple-600 hover:bg-purple-500 text-white hidden lg:inline-block"
          >Adicionar</button>
        </div>

        <div class="w-full lg:max-w-400 mx-auto">
          <div class="bg-gray-100 overflow-auto rounded mb-8" style="max-height: 400px">
            <pre>
              {{form}}
            </pre>
          </div>

          <div class="rounded overflow-hidden bg-white shadow-lg w-full mx-auto">
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
          <button
            class="btn btn-large bg-purple-600 hover:bg-purple-500 text-white w-full mt-8 inline-block lg:hidden"
          >Adicionar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        name: {
          name: "Nome",
          value: "",
          placeholder: "Placeholder nome",
          error: false,
          textError: "Erro name"
        },
        lastName: {
          name: "Sobrenome",
          value: "",
          placeholder: "Placeholder sobrenome",
          error: false,
          textError: "Erro sobrenome"
        },
        description: {
          name: "Description",
          value: "",
          placeholder: "Placeholder description",
          error: false,
          textError: "Erro description"
        },
        registerType: {
          name: "Tipo do cadastro",
          value: "PJ",
          placeholder: "Placeholder seila",
          error: false,
          textError: "Erro seila"
        },
        cnpj: {
          name: "CNPJ",
          value: "",
          placeholder: "Placeholder CNPJ",
          error: false,
          textError: "Erro CNPJ"
        },
        cpf: {
          name: "CPF",
          value: "",
          placeholder: "Placeholder CPF",
          error: false,
          textError: "Erro CPF"
        },
        nameCompany: {
          name: "Nome da sua empresa",
          value: "",
          placeholder: "Placeholder nome empresa",
          error: false,
          textError: "Erro nome empresa"
        },
        nomeCompanyFantasy: {
          name: "Nome da sua empresa fantasia",
          value: "",
          placeholder: "Placeholder nome fantasia",
          error: false,
          textError: "Erro nome fantasia"
        },
        cep: {
          name: "CEP",
          value: "",
          placeholder: "Placeholder cep",
          error: false,
          textError: "Erro cep"
        },
        delivery: {
          name: "Entrega",
          value: [
            {
              name: "Disk entrega",
              status: true
            },
            {
              name: "Retirar em mãos",
              status: true
            },
          ],
          error: false,
          textError: "Erro tags"
        },
        tags: {
          name: "Tags",
          value: [
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
          error: false,
          textError: "Erro tags"
        }
      }
    };
  }
};
</script>

<style scoped>
</style>
