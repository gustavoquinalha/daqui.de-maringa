<template>
  <div>
    <div class>
      <h1 class="font-bold text-2xl mb-8 text-purple-600">Adicionar meu negócio</h1>

      <div class="flex flex-wrap flex-col lg:flex-row">
        <div class="flex flex-col flex-1 lg:mr-8">
          <div class="mb-8 text-left" v-for="form in forms" v-bind:key="form.name">
            <span class="block text-black text-lg w-250 mb-2 font-bold">{{form.name}}</span>
            <!-- v-model="form.value" -->
            <input
              v-if="form.type === 'text'"
              type="text"
              :placeholder="form.placeholder"
              class="px-4 py-3 text-lg placeholder-gray-400 text-black relative rounded text-sm border outline-none focus:outline-none focus:shadow-outline w-full"
            />
            <div class="flex items-center" v-if="form.type === 'radio'">
              <input
                :id="form.name"
                type="checkbox"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                :for="form.name"
                class="ml-2 block text-lg leading-5 text-gray-900"
              >{{form.name}}</label>
            </div>
            <span
              class="block text-red-600 text-sm w-250 mt-2 font-bold"
              v-if="form.error"
            >{{form.textError}}</span>
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
      currentForm: {
        name: "",
        lastName: "",
        seila: ""
      },
      forms: [
        {
          name: "Nome",
          model: "name",
          type: "text",
          value: "name",
          placeholder: "Placeholder nome",
          erro: false,
          textError: "Erro name"
        },
        {
          name: "Sobrenome",
          model: "lastName",
          type: "text",
          value: "lastName",
          placeholder: "Placeholder sobrenome",
          erro: true,
          textError: "Erro sobrenome"
        },
        {
          name: "Seila",
          model: "seila",
          type: "radio",
          value: "seila",
          placeholder: "Placeholder seila",
          erro: true,
          textError: "Erro seila"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
