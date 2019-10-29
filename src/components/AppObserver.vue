<template>
  <div class="observer"></div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "observer",
  data() {
    return {
      observer: null
    };
  },
  mounted() {
    this.$data.observer = new IntersectionObserver(([entry]) =>
      entry && entry.isIntersecting ? this.$emit("intersect") : null
    );
    this.$data.observer.observe(this.$el);
  }
})
export default class AppObserver extends Vue {}
</script>
