<template>
  <div class="spinner" v-if="isLoading"></div>
  <div v-if="!isLoading" class="header-list">
    <div class="starship-count"> {{ starships.length }} Vaisseaux </div>
    <div class="button" @click="this.$router.push('/add')">Ajouter un Vaisseau</div>
  </div>
  <div v-if="!isLoading" class="starships-grid">
    <starship-item v-for="starship in starships_paginated" :key="starship.id" :name="starship.name" :created="starship.created" :class="'starship-item'"></starship-item >
  </div>
  <pagination-list v-if="!isLoading"  :totalPages="pageCount" :perPage="itemPerPage" :currentPage="currentPage" @pagechanged="pageChangeHandle"/>
  
</template>

<script>
import ApiService from '@/services/api.services.js';
import StarshipItem from '@/components/StarshipItem.vue';
import PaginationList from '@/components/PaginationList.vue';

const apiService = new ApiService()

export default {
  components: { StarshipItem, PaginationList },
  data() {
      return {
          starships: JSON.parse(localStorage.getItem("starships") || "[]"),
          starships_paginated: [],
          currentPage: 1,
          itemPerPage: 12,
          pageCount: 0,
          isLoading: true
      }
  },
  async created() {
    await this.fetchData()
    this.pageCount = Math.ceil(this.starships.length / 10)
    this.pageChangeHandle(this.currentPage)
    this.isLoading = false
  },
  methods: {
    async fetchData() {
      const data = await (await apiService.getStarships("https://swapi.dev/api/starships/")).json()
      let newStarships = data.results
      let next = data.next
      while(next) {
          const data = await (await apiService.getStarships(next)).json()
          newStarships = newStarships.concat(data.results)
          next = data.next
      }
      
      if(localStorage.starships) {
        let existingStarships = this.starships
        existingStarships.forEach(starship => {
          const isExistsStarship = newStarships.find(ship => ship.name === starship.name)
          if(!isExistsStarship) {
            this.starships.concat(starship)
          }
        })
      } else {
        localStorage.starships = JSON.stringify(newStarships)
        this.starships = newStarships
      }
    },
    async pageChangeHandle(value) {
      switch (value) {
        case 'next':
          this.currentPage += 1
          break
        case 'previous':
          this.currentPage -= 1
          break
        default:
          this.currentPage = value
      }
      const start = (this.currentPage === 1) ? 0 : (this.currentPage - 1) * 10;
      const end = start + (this.itemPerPage)
      this.starships_paginated = this.starships.slice(start, end)
    }
  }
}
</script>

<style lang="scss">
.starships-grid {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: row;
  grid-gap: 1.5rem;
  margin: 1rem;
}

.starship-item {
  color: var(--starwars-color);
}

.header-list {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .starship-count  {
    margin-left: 2rem;
  }

  .button {
    color: #000;
    padding: 1rem;
    border: #FFF;
    background-color: var(--starwars-color);
    margin-right: 1rem;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      background-color: rgb(255, 227, 0, 0.5);
    }
  }
}

@media screen and (min-width: 768px) {
  .starships-grid {
    grid-template-columns: repeat(3,1fr);
  }

  .header-list {
    font-size: 18px;

    .starship-count  {
      margin-left: 2rem;
    }

    .button {
      margin-right: 2rem;
    }
  }
}

.spinner{
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border: 5px solid var(--starwars-color);;
  border-bottom-color: transparent;
  position: relative;
  animation: spinner 1s linear infinite paused;
  -webkit-animation: spinner 1s linear infinite;
}

@keyframes spinner {
  to {
    transform: rotate(1turn);
    -webkit-transform: rotate(1turn);
    -moz-transform: rotate(1turn);
    -ms-transform: rotate(1turn);
    -o-transform: rotate(1turn);
  }
}
</style>
