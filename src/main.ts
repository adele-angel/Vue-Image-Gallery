import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// styles
import "@/assets/styles/main.css";

Vue.config.productionTip = false;

// global filters
Vue.filter("composeImageUrl", function(image: any): string {
  return `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_z.jpg`;
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
