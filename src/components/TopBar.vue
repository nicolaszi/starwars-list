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
<style>
.top-bar {
    text-align: center;
    font-size: 18px;
    align-items: center;
    color: var(--starwars-color);
    padding: 2rem;
    margin-bottom: 2rem;
}

img {
    width: 150px;
    height: 150px;
    padding: 2rem;
}

.title {
    font-family: "Starjedi";
    cursor: pointer;
}

@media only screen and (min-width: 768px) {
    .top-bar {
        font-size: 48px;
        margin-bottom: 5rem;
    }

    img {
        width: 200px;
        height: 200px;
    }
}
</style>