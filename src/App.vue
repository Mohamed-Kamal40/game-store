<template>
  <div>
    <Header />
    <Home />
    <Details />
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Home from "./components/Home.vue";
  import Details from "./components/Details.vue";

  export default {
    name: "App",
    components: {
      Header,
      Home,
      Details,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
