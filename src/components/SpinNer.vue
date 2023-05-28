<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img :src="Load" alt="" class="d-block  m-auto">
      </div>
    </div>
  </div>
</template>

<script>
import image from '../assets/Load.gif';

export default {
  name: 'SpinNer',
  props: {},
  data() {
    return {
      Load: image,
    };
  },
};
</script>

<style  lang="css"></style>
