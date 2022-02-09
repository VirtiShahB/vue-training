<template>
  <div></div>
</template>

<script>
import allAirports from '@/data/airports.js'
import airportMixin from '@/mixins/airport.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  components: {
    
  },
  mixins: [ airportMixin ],
  data() {
    return {
      airport: ''
    }
  },
  methods: {
  getAirportByCode() {
    return allAirports.filter(airport => airport.abbreviation === this.$route.params.code.toUpperCase())[0]
    }
  },
  mounted() {
    this.airport = this.getAirportByCode()
    this.getAirportWithCode(this.airport)
  },
  setup() {
    const route = useRoute()
    const airportWithCode = ref('')

    function getAirportByCode() {
      return allAirports.filter(airport => airport.abbreviation === route.params.code.toUpperCase())[0]
    }

    function getAirportWithCode(airport) {
      return `${airport.name} - ${airport.abbreviation}`
    }

    onMounted(() => {
      const airport = ref(getAirportByCode())
      airportWithCode.value = getAirportWithCode(airport.value)
    })
    return { airportWithCode }
  }
}
</script>

