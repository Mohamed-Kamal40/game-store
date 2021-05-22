<template>
  <div class="bg-light">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";

  export default {
    name: "App",
    components: {
      Header,
    },
  };
</script>

<style>
  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
  }
  h5,
  h6 {
    font-weight: 400;
  }
</style>
