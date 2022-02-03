<template>
    <div class="airport-page">
        <default-layout class="wrapper">
            
            <div v-for="airport in airports" :key="airport.abbreviation">
            <airport-card :airport="airport" />
            </div>
            <p>test: {{ airportWithCode }}</p>
        </default-layout>
    </div>
</template>

<script>
import allAirports from '@/data/airports.js'
import AirportCard from '@/components/AirportCard.vue'
import airportMixin from '@/mixins/airport.js'
export default {
    name:'AirportPage',
    components: {
        AirportCard
    },
    mixins: [ airportMixin ],
    data() {
        return {
            airports: allAirports
        }
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

p,
h3 {
  grid-column: span 3;
}
</style>