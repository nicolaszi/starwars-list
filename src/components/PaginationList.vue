<template>
  <div class="pagination">
    <div class="pagination-item">
      <button @click="onClickFirstPage" :disabled="isInFirstPage" type="button">
        <font-awesome-icon icon="angles-left" title="premiere page"/>
      </button>
    </div>

    <div class="pagination-item">
      <button
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        type="button"
      >
        <font-awesome-icon icon="angle-left"  title="page précédente"/>
      </button>
    </div>

    <div v-for="page in pages" :key="page.name" class="pagination-item">
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </div>

    <div class="pagination-item">
      <button @click="onClickNextPage" :disabled="isInLastPage" type="button">
        <font-awesome-icon icon="angle-right" title="page suivante"/>
      </button>
    </div>

    <div class="pagination-item">
      <button @click="onClickLastPage" :disabled="isInLastPage" type="button">
          <font-awesome-icon icon="angles-right" title="dernière page"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }

      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];
      for (let i = 1; i <= this.totalPages; i++) {
        range.push({ name: i, isDisabled: i === this.currentPage });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    }
  },
};
</script>
<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;

  .pagination-item {
    margin: 10px;

    button {
      font-size: 18px;
      cursor: pointer;
    }

    .active {
      background-color: #4aae9b;
      border-color: #4aae9b;
      color: #ffffff;
    }
  }
}
</style>
