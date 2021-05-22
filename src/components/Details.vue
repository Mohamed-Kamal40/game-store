<template>
  <b-container>
    <b-row>
      <b-col cols="12 img-container p-0"
        ><img :src="post.image" class="img-fluid w-100 h-100" alt="game image"
      /></b-col>
      <b-col
        cols="12"
        class="bg-white shadow-lg px-5 py-3 my-5 position-relative"
      >
        <h3>{{ post.owner.firstName }} {{ post.owner.lastName }}</h3>
        <h5>{{ post.owner.email }}</h5>
        <p class="text-muted">{{ post.owner.title }}</p>
        <p class="description">{{ post.text }}</p>
        <p><b-icon icon="hand-thumbs-up"></b-icon> {{ post.likes }}</p>
        <div class="bdg-container px-5 py-3 ">
          <b-badge class="bdg px-2 mx-1" v-for="tag in post.tags" :key="tag">{{
            tag
          }}</b-badge>
        </div>
      </b-col>
    </b-row>
    <b-row class="bg-white shadow-lg rounded-lg my-5 p-4">
      <b-col cols="12" class="d-flex justify-content-between">
        <h4 class="text-dark">Similar posts</h4>
        <a href="" class="seeAll"
          >SEE ALL<b-icon icon="chevron-right"></b-icon>
        </a>
      </b-col>
      <b-col
        cols="12"
        lg="3"
        md="4"
        sm="6"
        v-for="post in posts"
        :key="post.id"
      >
        <Card :post="post" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import axios from "axios";
  import Card from "./Card.vue";

  export default {
    name: "Details",
    components: {
      Card,
    },
    data() {
      return {
        baseUrl: "https://dummyapi.io/data/api",
        appId: "60a95835c3eb95636400b60d",
        posts: [],
        post: {},
      };
    },
    props: { id: String },
    methods: {
      getPostById() {
        axios
          .get(`${this.baseUrl}/post/${this.id}`)
          .then((res) => {
            this.post = res.data;
          })
          .catch((err) => console.log(err));
      },
      getByTag(tag) {
        axios
          .get(`${this.baseUrl}/tag/${tag}/post`)
          .then((res) => {
            this.posts = res.data.data.slice(0, 4);
          })
          .catch((err) => console.log(err));
      },
    },
    watch: {
      post() {
        this.getByTag(this.post.tags[0]);
      },
    },
    created() {
      axios.defaults.headers.common["app-id"] = this.appId;
      this.getPostById();
    },
  };
</script>

<style scoped>
  .img-container {
    height: 400px;
  }
  .description {
    font-size: 1.5em;
  }
  .bdg-container {
    position: absolute;
    top: 0;
    right: 0;
  }
  .bdg {
    font-size: 1em;
    background-color: #572589;
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
