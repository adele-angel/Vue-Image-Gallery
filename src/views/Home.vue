<template>
  <div class="home">
    <!-- searchbar -->
    <AppSearch
      @searchResults="getSearchedImages"
      @searchText="searchText = $event"
      @currentPage="currentPage = $event"
    />

    <!-- partition -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="50"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      class="partition"
    >
      <path d="M0 0 50 100 50 100 100 0 Z" />
    </svg>

    <!-- images stats -->
    <p v-if="images">
      Total images found:
      <strong>{{ total | numberWithCommas }}</strong>
      <span class="page-indicator" v-if="images.length > 0"
        >showing
        {{
          (currentPage > 1 ? "pages 1-" + currentPage : "page 1")
            | numberWithCommas
        }}
        out of {{ pages | numberWithCommas }}</span
      >
    </p>

    <div v-if="images" class="gallery">
      <!-- image thumbnail list -->
      <div
        class="gallery__thumb"
        v-for="(image, index) in images"
        :item="image"
        :selected="index"
        :key="image.id"
        @click="onImageSelect(index)"
      >
        <img :src="image | composeImageUrl" :alt="image.title" />
      </div>
    </div>

    <!-- image slider -->
    <AppModal
      :images="images"
      :idx="selected"
      :isModalOpen="isModalOpen"
      @indexChanged="selected = $event"
      @modalClosed="isModalOpen = false"
    />

    <!-- lazy loading -->
    <AppObserver v-on:intersect="intersected" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// components
import AppSearch from "@/components/AppSearch.vue";
import AppModal from "@/components/AppModal.vue";
import AppObserver from "@/components/AppObserver.vue";
// services
import ImageService from "@/services/image.service";
const imageService = new ImageService();
// interfaces
import { ImageResponse, ImagesData } from "@/interfaces/interface";

@Component({
  name: "home",
  components: {
    AppSearch,
    AppModal,
    AppObserver
  },
  data() {
    return {
      selected: null,
      isModalOpen: false,
      searchText: "",
      currentPage: 1,
      total: null,
      pages: null,
      images: []
    };
  },
  filters: {
    numberWithCommas(value: string | number): string | number {
      return value
        ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : value;
    }
  },
  methods: {
    getSearchedImages(images: ImagesData): void {
      this.$data.total = images.photos.total;
      this.$data.pages = images.photos.pages;
      this.$data.images = [...images.photos.photo];
    },
    onImageSelect(index: number): void {
      this.$data.selected = index;
      this.$data.isModalOpen = true;
    },
    intersected(): void {
      if (this.$data.currentPage < this.$data.pages) {
        this.$data.currentPage++;

        imageService
          .getImages(this.$data.searchText, this.$data.currentPage)
          .then((res: ImageResponse) => {
            this.$data.total = res.data.photos.total;
            this.$data.pages = res.data.photos.pages;
            this.$data.images = [
              ...this.$data.images,
              ...res.data.photos.photo
            ];
          })
          .catch((err: string): void => console.error(err));
      }
    }
  },
  created() {
    this.$data.currentPage = 1;
    this.$data.searchText = "cute puppy";

    imageService
      .getImages(this.$data.searchText, this.$data.currentPage)
      .then((res: ImageResponse) => {
        this.$data.total = res.data.photos.total;
        this.$data.pages = res.data.photos.pages;
        this.$data.images = res.data.photos.photo;
      })
      .catch((err: string): void => console.error(err));
  }
})
export default class Home extends Vue {}
</script>
