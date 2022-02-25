<template>
    <div class="toast-message" v-if="toast">Le vaisseau a bien été ajouté</div>
    <div class="starship-form">
        <div>
            <input :placeholder="'nom du vaisseau'" type="text" v-model="name" />
            <div class="error" v-if="error">{{ error }}</div>
        </div>
        <div>
            <input type="submit" value="Ajouter" v-on:click="submit" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            created: '',
            toast: false,
            error: ""
        }
    },
    methods: {
        submit: function () {
            this.checkErrors()
            if (!this.error) {
                this.created = new Date()
                let starships = JSON.parse(localStorage.getItem("starships") || "[]")
                starships = starships.concat({ name: this.name, created: this.created })
                localStorage.starships = JSON.stringify(starships)
                this.toast = true
                this.name = "";
                this.created = "";
                setTimeout(() => { this.toast = false }, 5000)
            }
        },
        checkErrors: function () {
            this.name = this.name.trim()
            if (!this.name) {
                this.error = "Le nom de vaisseau ne peut être vide"
                return false
            } else if (this.name.length < 3 || this.name.length > 50) {
                this.error = "Le vaisseau doit faire au minimum 3 caractères et au maximum 50 caractères"
                return false
            } else {
                this.error = ""
                return true
            }
        }
    }
}
</script>

<style scoped lang="scss">
.toast-message {
    width: 50%;
    margin: auto;
    text-align: center;
    font-size: 18px;
    padding: 5px;
    border: 1px solid;
    background-color: green;
}

.starship-form {
    margin-top: 5rem;
    text-align: center;

    & > div {
        margin-bottom: 35px;
    }

    .error {
        color: red;
    }
}
input {
    text-align: center;
    max-width: 100%;
    width: 50%;
    height: 45px;
    padding: 5px;
    font-size: 18px;

    &[type="submit"] {
        cursor: pointer;
    }
}
</style>
