/*import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");*/

// FILE: main.js

import { createApp } from "vue";
import { Quasar } from "quasar";
import { createPinia } from "pinia";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

// Assumes you have a <divid="app"></div> in your index.html
app.mount("#app");
