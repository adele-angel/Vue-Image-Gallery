<template>
  <div v-on:scroll.passive="onScroll" class="home">
    <!-- searchbar -->
    <AppSearch @searchResults="getSearchedImages" />

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
        <img :src="composeImageUrl(image)" :alt="image.title" />
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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// components
import AppSearch from "@/components/AppSearch.vue";
import AppModal from "@/components/AppModal.vue";
// services
import ImageService from "@/services/image.service";
const imageService = new ImageService();
// interfaces
import { ImageResponse } from "@/interfaces/interface";

@Component({
  name: "home",
  components: { AppSearch, AppModal },
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
      if (value) return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return value;
    }
  },
  methods: {
    getSearchedImages(images): void {
      this.$data.total = images.photos.total;
      this.$data.pages = images.photos.pages;
      this.$data.images = images.photos.photo;
    },
    composeImageUrl(image): string {
      return `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_z.jpg`;
    },
    onImageSelect(index): void {
      this.$data.selected = index;
      this.$data.isModalOpen = true;
    },
    onScroll(event) {
      let bottomOfWindow =
        document.documentElement.clientTop < window.innerHeight;
      if (bottomOfWindow) {
        // console.log("scrolling");
        // console.log(this.$route);
        //   imageService
        //     .getImages("cute puppy", this.$data.currentPage)
        //     .then(res => {
        //       this.$data.total = res.data.photos.total;
        //       this.$data.pages = res.data.photos.pages;
        //       this.$data.images = res.data.photos.photo;
        //     })
        //     .catch((err: string) => console.log(err));
      }
    }
  },
  beforeMount() {
    imageService
      .getImages("cute puppy", this.$data.currentPage)
      .then(res => {
        this.$data.total = res.data.photos.total;
        this.$data.pages = res.data.photos.pages;
        this.$data.images = res.data.photos.photo;
      })
      .catch((err: string) => console.log(err));
  }
})
export default class Home extends Vue {}
</script>
