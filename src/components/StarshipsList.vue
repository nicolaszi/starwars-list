<template>
  <div class="spinner" v-if="isLoading"></div>
  <div v-if="!isLoading" class="header-list">
    <div class="starship-count">{{ starships.count }} Vaisseaux</div>
    <div class="button" @click="this.$router.push('/add')">Ajouter un Vaisseau</div>
  </div>
  <div v-if="!isLoading" class="starships-grid">
    <starship-item
      v-for="starship in starships.data"
      :key="starship.id"
      :name="starship.name"
      :created="starship.created"
      :class="'starship-item'"
    ></starship-item>
  </div>
  <pagination-list
    v-if="!isLoading"
    :totalPages="pageCount"
    :perPage="itemPerPage"
    :currentPage="currentPage"
    @pagechanged="pageChangeHandle"
  />
</template>

<script>
import StarshipItem from '@/components/StarshipItem.vue';
import PaginationList from '@/components/PaginationList.vue';
import { getStarships } from '@/services/api.services.js';

export default {
  components: { StarshipItem, PaginationList },
  data() {
    return {
      starships: [],
      currentPage: 1,
      itemPerPage: 12,
      pageCount: 0,
      isLoading: true
    }
  },
  async created() {
    this.isLoading = true
    await this.fetchData()
    this.pageCount = Math.ceil(this.starships.count / 12)
    this.isLoading = false
  },
  methods: {
    async fetchData(take = this.itemPerPage, skip = 0 ) {
      this.starships = await getStarships(take, skip)
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
      const skip = (this.currentPage === 1) ? 0 : (this.currentPage - 1) * 12;
      await this.fetchData(this.itemPerPage, skip)
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

.header-list {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .starship-count {
    margin-left: 2rem;
  }

  .button {
    color: #000;
    padding: 1rem;
    border: #fff;
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
    grid-template-columns: repeat(3, 1fr);
  }

  .header-list {
    font-size: 18px;

    .starship-count {
      margin-left: 2rem;
    }

    .button {
      margin-right: 2rem;
    }
  }
}

.spinner {
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border: 5px solid var(--starwars-color);
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
