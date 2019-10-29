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
      <p class="search-error" v-if="error !== ''">{{ error }}</p>
    </form>

    <!-- preloader -->
    <div v-else-if="loading" class="preloader">
      <img src="@/assets/images/preloader.gif" alt="Preloader" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// services
import ImageService from "@/services/image.service";
const imageService = new ImageService();
// interfaces
import { ImageResponse } from "../interfaces/interface";

@Component({
  name: "search",
  data() {
    return {
      loading: false,
      search: "",
      currentPage: 1,
      error: ""
    };
  },
  methods: {
    onSubmit(): void {
      this.$data.loading = true;
      this.$data.error = "";

      if (this.$data.search.trim() === "") {
        this.$data.loading = false;
        this.$data.error = "Input field is empty";
      } else {
        imageService
          .getImages(this.$data.search, this.$data.currentPage)
          .then((res: ImageResponse) => {
            this.$data.currentPage = 1;
            this.$data.loading = false;

            this.$emit("searchText", this.$data.search);
            this.$emit("searchResults", res.data);
            this.$emit("currentPage", this.$data.currentPage);

            this.$data.search = "";
          })
          .catch((err: string): void => console.error(err));
      }
    }
  }
})
export default class AppSearch extends Vue {}
</script>
