export default {
    data() {
      return {
        airportWithCode: ''
      }
    },
    methods: {
      getAirportWithCode(airport) {
        this.airportWithCode = `${airport.name} - ${airport.abbreviation}`
      }
    }
  }