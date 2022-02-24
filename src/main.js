import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleLeft)
library.add(faAngleRight)
library.add(faAnglesLeft)
library.add(faAnglesRight)

const app = createApp(App)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon).mount('#app')
