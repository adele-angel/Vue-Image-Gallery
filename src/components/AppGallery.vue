<template>
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
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
// interfaces
import { Image } from "@/interfaces/interface";

@Component({
  name: "modal",
  data() {},
  props: {
    images: Array[Image]
  },
  methods: {}
})
export default class GalleryModal extends Vue {}
</script>
