<template>
  <div class="google-map-area section" id="support">
    <GmapMap :center="{lat:40.984272, lng:28.636398}" :zoom="12" map-type-id="terrain"></GmapMap>
  </div>
</template>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws",
  },
});
export default {
  name: "GoogleMap",
};
</script>
