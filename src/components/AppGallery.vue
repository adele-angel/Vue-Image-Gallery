<template>
  <div id="modal" class="modal" v-if="isModalOpen">
    <div class="modal-content">
      <span class="close" @click="closeModal()">&times;</span>
      <div class="modal-images">
        <div class="model-image-previous" @click="sliderActions('prev')">
          <img
            :src="
              composeImageUrl(images[idx > 0 ? idx - 1 : images.length - 1])
            "
            alt="Previous image"
          />
        </div>
        <div class="modal-image-selected">
          <img :src="composeImageUrl(images[idx])" :alt="images[idx].title" />
        </div>
        <div class="model-image-next" @click="sliderActions('next')">
          <img
            :src="
              composeImageUrl(images[idx < images.length - 1 ? idx + 1 : 0])
            "
            alt="Next image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
// interfaces
import { Image } from "@/interfaces/image.interface";

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
