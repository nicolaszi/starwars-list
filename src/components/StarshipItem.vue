<template>
  <div class="starship-card">
    <div class="starship-name">{{ name }}</div>
    <div>Créé le: {{ formatted_date }}</div>
  </div>
</template>

<script>
import dateFormat from "dateformat";

export default {
  props: ["name", "created"],
  computed: {
    formatted_date() {
      const formatted_date = new Date(this.created);
      return dateFormat(formatted_date, "dd/mm/yyyy HH:MM:ss");
    },
  },
};
</script>

<style scoped lang="scss">
.starship-card {
  border: 1px solid #d0d0d0;
  background-color: #FFF;
  color: #000;
  overflow: auto;
  border-radius: 8px;
  box-shadow: 0 0 20px 1px #d0d0d0;
  text-align: left;
  padding: 1rem;

  .starship-name {
    text-align: center;
}
}


</style>