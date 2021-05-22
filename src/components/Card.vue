<template>  
  <div class="d-flex flex-column justify-content-between h-100 py-2">
    <div>
      <img :src="post.image" alt="" class="w-100 cardImg" />
    </div>

    <div></div>
    <div class="mt-auto">
      <h4>{{ post.owner.firstName }} {{ post.owner.lastName }}</h4>
      <b-button class="moreInfo w-100">
        <router-link
          :exact="true"
          class="text-white text-decoration-none"
          :to="'details/' + post.id"
          >MORE INFO</router-link
        ></b-button
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      post: Object,
    },
  };
</script>

<style scoped>
  .moreInfo {
    background-color: #572589;
  }
  .seeAll {
    color: #572589;
    cursor: pointer;
  }
  .cardImg {
    border-radius: 1em;
  }
  .likesCounter {
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    border-radius: 0.5em;
  }
</style>
