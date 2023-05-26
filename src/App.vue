<template>
  <div id="app">
  <NavBar/>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/edit">edit</router-link>|
      <router-link to="/view">view</router-link>|
      <router-link to="/add">add</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style >

</style>
