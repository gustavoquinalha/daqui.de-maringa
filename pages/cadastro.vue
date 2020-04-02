<template>
  <div>
    <div class>
      <h1 class="font-bold text-2xl mb-8 text-purple-600">Adicionar meu negócio</h1>

      <div class="flex flex-wrap flex-col lg:flex-row">
        <div class="flex flex-col flex-1 lg:mr-8">
          <div class="mb-8 text-left">
            <span class="block text-black text-lg w-250 mb-2 font-bold">{{form.name.name}}</span>
            <input
              type="text"
              :placeholder="form.name.placeholder"
              class="px-4 py-3 text-lg placeholder-gray-400 text-black relative rounded text-sm border outline-none focus:outline-none focus:shadow-outline w-full"
            />
            <span
              class="block text-red-600 text-sm w-250 mt-2 font-bold"
              v-if="form.name.error"
            >{{form.name.textError}}</span>
          </div>
          <div class="mb-8 text-left">
            <span class="block text-black text-lg w-250 mb-2 font-bold">{{ form.lastName.name }}</span>
            <input
              type="text"
              :placeholder="form.lastName.placeholder"
              class="px-4 py-3 text-lg placeholder-gray-400 text-black relative rounded text-sm border outline-none focus:outline-none focus:shadow-outline w-full"
            />
            <span
              class="block text-red-600 text-sm w-250 mt-2 font-bold"
              v-if="form.lastName.error"
            >{{form.lastName.textError}}</span>
          </div>
          <div class="mb-8 text-left">
            <div class="flex items-center">
              <input
                id="register-type"
                type="radio"
                class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                :for="form.registerType.name"
                class="ml-2 block text-lg leading-5 text-gray-900"
              >{{form.registerType.name}}</label>
            </div>
            <span
              class="block text-red-600 text-sm w-250 mt-2 font-bold"
              v-if="form.lastName.error"
            >{{form.lastName.textError}}</span>
          </div>
          <button
            class="btn btn-large bg-purple-600 hover:bg-purple-500 text-white hidden lg:inline-block"
          >Adicionar</button>
        </div>

        <div class>
          <div class="rounded overflow-hidden bg-white shadow-lg max-w-300 mx-auto">
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
          error: true,
          textError: "Erro sobrenome"
        },
        registerType: {
          name: "Tipo do cadastro",
          value: "seila",
          placeholder: "Placeholder seila",
          error: true,
          textError: "Erro seila"
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
