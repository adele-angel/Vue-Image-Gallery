<template>
  <nav>
    <router-link class="nav__brand" to="/">
      <img src="@/assets/images/logo.png" alt="logo" /> Vue Image Gallery
    </router-link>
    <div class="nav__links">
      <router-link class="nav__link" to="/">Home</router-link>&nbsp;
      <router-link class="nav__link" to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AppNavbar extends Vue {}
</script>
