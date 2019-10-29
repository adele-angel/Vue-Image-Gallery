<template>
  <div class="search">
    <form v-if="!loading" v-on:submit.prevent="onSubmit">
      <!-- searchbar -->
      <input
        type="text"
        name="search"
        placeholder="Search images..."
        v-model="search"
      />
      <button class="search__btn">Search</button>

      <!-- error message -->
      <p class="search-error" v-if="errors.input">{{ errors.input }}</p>
    </form>

    <!-- preloader -->
    <div v-else-if="loading" class="preloader">Loading...</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// services
import ImageService from "@/services/image.service";
const imageService = new ImageService();

@Component({
  name: "search",
  data() {
    return {
      loading: false,
      search: "",
      errors: {}
    };
  },
  methods: {
    onSubmit() {
      this.$data.loading = true;
      this.$data.errors = {};
      if (this.$data.search.trim() === "") {
        this.$data.loading = false;
        this.$data.errors.input = "Input field is empty";
        this.$data.search = "";
      } else {
        imageService
          .getImages(this.$data.search, 1)
          .then(res => {
            this.$data.loading = false;
            this.$data.search = "";
            const images = res.data;
            this.$emit("searchResults", images);
          })
          .catch((err: string) => (this.$data.errors.http = err));
      }
    }
  }
})
export default class AppSearch extends Vue {}
</script>
