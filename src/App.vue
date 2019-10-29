<template>
  <div id="app">
    <AppNavbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// components
import AppNavbar from "@/components/AppNavbar.vue";

@Component({
  name: "app",
  components: { AppNavbar }
})
export default class App extends Vue {}
</script>
