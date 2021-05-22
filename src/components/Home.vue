<template>
  <div>
    <div class="d-flex justify-content-center mt-2">
      <input
        type="button"
        :value="tag"
        class="tag border-0 rounded-pill mx-2 px-3 py-2"
        v-for="tag in tags"
        :key="tag"
        @click="getByTag($event)"
      />
    </div>
    <b-container>
      <div class="text-center mt-5">
        <b-icon
          v-if="loading"
          icon="arrow-clockwise"
          animation="spin"
          font-scale="4"
        ></b-icon>
      </div>
      <b-row class="bg-white shadow-lg rounded-lg my-5 py-4" v-if="taged">
        <b-col cols="12" class="d-flex justify-content-between">
          <h4 class="text-dark">Results</h4>
          <a href="" class="seeAll"
            >SEE ALL<b-icon icon="chevron-right"></b-icon>
          </a>
        </b-col>
        <b-col
          cols="12"
          lg="3"
          md="4"
          sm="6"
          v-for="post in filterd"
          :key="post.id"
        >
          <Card :post="post" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="bg-white shadow-lg rounded-lg my-5" v-if="!taged">
        <b-col cols="12" lg="8" class="p-0">
          <b-img fluid src="../assets/cover.jpg" alt="cover image"> </b-img>
        </b-col>
        <b-col class="text-dark p-5" cols="12" lg="4"
          ><h4>Subway Surfers</h4>
          <h5>SYBO Games</h5>
          <p>SURF the urban wave!</p>
          <p>DODGE the oncoming trains!</p>
          <p class="text-muted">300k Downloads</p>
          <b-button class="moreInfo w-100">MORE INFO</b-button>
        </b-col>
      </b-row>
      <b-row class="bg-white shadow-lg rounded-lg my-5 pt-4 pb-5">
        <b-col cols="12" class="d-flex justify-content-between pb-3">
          <h4 class="text-dark">Most Recommendation</h4>
          <a href="" class="seeAll"
            >SEE ALL<b-icon icon="chevron-right"></b-icon>
          </a>
        </b-col>
        <b-col
          v-for="post in firstPosts"
          :key="post.id"
          cols="12"
          lg="3"
          md="4"
          sm="6"
        >
          <Card :post="post" />
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
          v-for="post in lastPosts"
          :key="post.id"
          cols="12"
          lg="3"
          md="4"
          sm="6"
        >
          <Card :post="post" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import axios from "axios";
  import Card from "./Card.vue";

  export default {
    name: "Home",
    components: {
      Card,
    },
    data() {
      return {
        baseUrl: "https://dummyapi.io/data/api",
        appId: "60a7645d40830eba392442ef",
        posts: [],
        firstPosts: [],
        lastPosts: [],
        tags: [
          "grass",
          "blanket",
          "airedale",
          "sheep",
          "asleep",
          "erlangen",
          "desert",
          "people",
          "poodle",
          "mountain",
          "nature",
          "toronto",
          "winter",
        ],
        filterd: [],
        taged: false,
        loading: false,
      };
    },
    created() {
      axios.defaults.headers.common["app-id"] = this.appId;
      this.getPosts();
    },
    methods: {
      getPosts() {
        axios
          .get(`${this.baseUrl}/post`)
          .then((res) => {
            this.posts = res.data.data;
            this.firstPosts = this.posts.slice(0, 4);
            this.lastPosts = this.posts.slice(4, 8);
          })
          .catch((err) => console.log(err));
      },
      async getByTag({ target }) {
        this.loading = true;
        if (target.classList.contains("active")) {
          target.classList.remove("active");
          this.taged = false;
          return;
        }
        document.querySelectorAll(".tag").forEach((element) => {
          element.classList.remove("active");
        });
        target.classList.add("active");
        await axios
          .get(`${this.baseUrl}/tag/${target.value}/post`)
          .then((res) => {
            if (res.data.data.length >= 4) {
              this.filterd = res.data.data.slice(0, 4);
            } else this.filterd = res.data.data.slice(0, res.data.data.length);
          })
          .catch((err) => console.log(err));
        this.loading = false;
        this.taged = true;
      },
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
  .tag {
    color: #343a40;
    font-weight: 700;
    transition: all 0.2s;
  }
  .tag:hover {
    background-color: #673599;
    color: white;
  }
  .tag:active {
    background-color: #471579;
    border-color: #471579;
    color: white;
  }
  .active {
    background-color: #673599;
    color: white;
  }
</style>
