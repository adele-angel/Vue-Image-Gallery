<template>
  <div id="modal" class="modal" v-if="isModalOpen">
    <div class="modal-content">
      <span class="close" @click="closeModal()">&times;</span>
      <div class="modal-images">
        <div class="model-image-previous" @click="sliderActions('prev')">
          <img
            :src="
              images[idx > 0 ? idx - 1 : images.length - 1] | composeImageUrl
            "
            alt="Previous image"
          />
        </div>
        <div class="modal-image-selected">
          <img :src="images[idx] | composeImageUrl" :alt="images[idx].title" />
        </div>
        <div class="model-image-next" @click="sliderActions('next')">
          <img
            :src="
              images[idx < images.length - 1 ? idx + 1 : 0] | composeImageUrl
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

@Component({
  name: "modal",
  data() {
    return {
      index: this.idx
    };
  },
  props: {
    images: Array,
    idx: Number,
    isModalOpen: Boolean
  },
  methods: {
    closeModal() {
      this.$emit("modalClosed", false);
    },
    sliderActions(action) {
      let newIdx = this.idx;
      if (action === "prev") {
        newIdx > 0 ? newIdx-- : (newIdx = this.images.length - 1);
      }
      if (action === "next") {
        newIdx < this.images.length - 1 ? newIdx++ : (newIdx = 0);
      }
      this.$emit("indexChanged", newIdx);
    }
  }
})
export default class AppModal extends Vue {}
</script>
