<template>
    <div class="top-bar">
        <p @click="goHome" class="title">les vaisseaux star wars</p>
    </div>
</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push('/')
        }
    },
}
</script>
<style scoped lang="scss">
.top-bar {
    text-align: center;
    font-size: 3rem;
    align-items: center;
    color: var(--starwars-color);
    padding: 2rem;
    margin-bottom: 1em;
    min-height: 200px;

    .title {
        font-family: "Starjedi";
        cursor: pointer;
    }
}
</style>
