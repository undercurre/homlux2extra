import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import "virtual:uno.css";

const app = createApp(App);

app.use(Vant);

app.mount("#app");
