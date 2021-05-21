<template>
  <b-container>
    <b-row class="bg-white shadow-lg rounded-lg my-5">
      <b-col cols="12" lg="8" class="p-0">
        <b-img fluid src="../assets/cover.jpg" alt="cover image"> </b-img>
      </b-col>
      <b-col class="text-dark p-5" cols="12" lg="4"
        ><h4>Subway Surfers</h4>
        <h5>SYBO Games</h5>
        <p>SURF the urban wave!</p>
        <p>DODGE the oncoming trains!</p>
        <p class="text-muted">300k Downloads</p>
        <b-button class="moreInfo">MORE INFO</b-button>
      </b-col>
    </b-row>
    <b-row class="bg-white shadow-lg rounded-lg my-5 p-4">
      <b-col cols="12" class="d-flex justify-content-between">
        <h4 class="text-dark">Most Recommendation</h4>
        <a href="" class="seeAll"
          >SEE ALL<b-icon icon="chevron-right"></b-icon>
        </a>
      </b-col>
      <b-col
        cols="12"
        lg="3"
        md="4"
        sm="6"
        v-for="post in firstPosts"
        :key="post.id"
      >
        <div class="my-2 img-container position-relative">
          <b-img class="cardImg" fluid :src="post.image"></b-img>
          <div class="bg-light likesCounter px-1">
            <b-icon icon="hand-thumbs-up"></b-icon> {{ post.likes }}
          </div>
        </div>
        <div>
          <h5>{{ post.owner.firstName }} {{ post.owner.lastName }}</h5>
          <b-button class="moreInfo">
            <router-link
              class="text-white text-decoration-none"
              :to="'details/' + post.id"
              >MORE INFO</router-link
            ></b-button
          >
        </div>
      </b-col>
    </b-row>
    <b-row class="bg-white shadow-lg rounded-lg my-5 p-4">
      <b-col cols="12" class="d-flex justify-content-between">
        <h4 class="text-dark">Most Popular</h4>
        <a href="" class="seeAll"
          >SEE ALL<b-icon icon="chevron-right"></b-icon>
        </a>
      </b-col>
      <b-col
        cols="12"
        lg="3"
        md="4"
        sm="6"
        v-for="post in lastPosts"
        :key="post.id"
      >
        <div class="my-2 img-container position-relative">
          <b-img class="cardImg" fluid :src="post.image"></b-img>
          <div class="bg-light likesCounter px-1">
            <b-icon icon="hand-thumbs-up"></b-icon> {{ post.likes }}
          </div>
        </div>
        <div>
          <h5>{{ post.owner.firstName }} {{ post.owner.lastName }}</h5>
          <b-button class="moreInfo">
            <router-link
              class="text-white text-decoration-none"
              :to="'details/' + post.id"
              >MORE INFO</router-link
            ></b-button
          >
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Home",
    data() {
      return {
        baseUrl: "https://dummyapi.io/data/api",
        appId: "60a7645d40830eba392442ef",
        posts: [],
        firstPosts: [],
        lastPosts: [],
      };
    },
    created() {
      this.getPosts();
    },
    methods: {
      getPosts() {
        axios
          .get(`${this.baseUrl}/post`, {
            headers: {
              "app-id": this.appId,
            },
          })
          .then((res) => {
            this.posts = res.data.data;
            this.firstPosts = this.posts.slice(1, 5);
            this.lastPosts = this.posts.slice(4, 8);
          });
      },
    },
  };
</script>

<style scoped>
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
  .moreInfo {
    width: 100%;
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
