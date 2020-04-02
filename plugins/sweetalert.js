import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
 
const options = {
  confirmButtonColor: '#41B882',
  cancelButtonColor: '#FF7674',
  heightAuto: false
}

Vue.use(VueSweetalert2, options)

export default function (context, inject) {
  context.$swal = Vue.swal
  inject('swal', Vue.swal)
}
