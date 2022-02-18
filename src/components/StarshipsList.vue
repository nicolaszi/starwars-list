<template>
  
</template>

<script>
import ApiService from '@/services/api.services.js';
const apiService = new ApiService()

export default {
  data() {
      return {
          starships: []
      }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const data = await (await apiService.getStarships("https://swapi.dev/api/starships/")).json()
      this.starships = data.results
      let next = data.next
      while(next) {
        const data = await (await apiService.getStarships(next)).json()
        this.starships = this.starships.concat(data.results)
        next = data.next
      }
    }
  }
}
</script>

<style>

</style>