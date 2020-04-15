<template>
  <input type="text" :placeholder="placeholder" :value="value" @input="input" ref="address" />
</template>

<script>
export default {
  props: {
    placeholder: '',
    value: ''
  },
  mounted() {
    setTimeout(() => {
      
      window.initMap = () => {
        this.$nextTick(() => {
          if (this.$refs.address) {
            new google.maps.places.Autocomplete(this.$refs.address)
          }
        })
      }
  
      if (typeof google == 'undefined' || !document.getElementById('scriptGoogleMaps')) {
        var script = document.createElement('script')
        script.setAttribute('id', 'scriptGoogleMaps')
        script.setAttribute('async', 'true')
        script.setAttribute('defer', 'true')
        script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAZgN8k4fvm_A5BXSx1B8JzHit9InJYDQs&libraries=places&callback=window.initMap')
        document.head.appendChild(script)
      } else {
        window.initMap()
      }

    }, 500)
  },
  methods: {
    input(value) {
      this.$emit('input', value.target.value)
    }
  }
}
</script>

<style>

</style>