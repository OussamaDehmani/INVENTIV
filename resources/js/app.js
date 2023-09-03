import "./bootstrap";
import { createApp } from "vue/dist/vue.esm-bundler.js";
import calculator from "./components/calculator.vue";
const app = createApp({
    components: {
        calculator,
    },
});
app.mount("#app");
