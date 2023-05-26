<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/contacts">contacts</router-link>|
      <router-link to="/edit">edit</router-link>|
      <router-link to="/view">view</router-link>|
      <router-link to="/add">add</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
};
</script>

<style lang="css">

</style>
