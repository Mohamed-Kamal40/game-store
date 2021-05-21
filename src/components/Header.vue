<template>
  <div>
    <b-navbar>
      <div>
        <b-navbar-brand class="logo">
          <b-img fluid src="../assets/image001.jpg" alt="logo"> </b-img>
        </b-navbar-brand>
      </div>
      <div class="ml-auto search">
        <input class="searchInput " placeholder="search...." type="text" />
        <b-button class="searchButton " size="sm">
          <b-icon class="searchIcon" icon="search"></b-icon>
        </b-button>
      </div>
      <b-button class="threeDots mx-1" v-b-modal.login size="lg">
        <b-icon icon="three-dots-vertical"></b-icon>
      </b-button>
    </b-navbar>
    <b-modal
      hide-footer
      hide-header
      id="login"
      title="Please add your account details"
    >
      <p class="text-muted">Please add your account details</p>
      <form ref="form" @submit.prevent>
        <b-form-group label="Username / Email" label-for="username">
          <b-form-input
            class="inputs"
            id="username"
            v-model="username"
            required
            placeholder="type your username here"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password" label-for="password">
          <div class="position-relative">
            <b-form-input
              type="password"
              class="inputs"
              id="password"
              v-model="password"
              required
              placeholder="type your password here"
            ></b-form-input>
            <b-button
              class="p-0 bg-white border-0 showPass"
              v-b-modal.login
              size="sm"
            >
              <b-icon variant="dark" icon="eye-slash-fill"></b-icon>
            </b-button>
          </div>
        </b-form-group>
        <a class="formTxt float-right">forgot password?</a>
        <b-button class="w-100 submitButton my-1" type="submit"
          >Submit</b-button
        >
        <div class="text-center">
          <a class="formTxt">Dont have an account? sign up!</a>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {},
  };
</script>

<style scoped>
  .logo {
    width: 100px;
  }

  .search {
    --size: 50px;
    border: 2px solid #572589;
    display: flex;
    border-radius: 100px;
    overflow: hidden;
    position: relative;
    width: var(--size);
    height: var(--size);
    transition: width 450ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
    padding: 3px;
  }

  .searchInput {
    border: 0;
    padding: 0.25em 1em;
    flex-grow: 1;
    outline: 0;
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: transparent;
    opacity: 0;
    cursor: pointer;
  }

  .searchButton {
    font-size: 1rem;
    margin-left: auto;
    background: none;
    border: 0;
    cursor: pointer;
    border-radius: 50%;
    transition: background 200ms width 200ms;
    width: calc(var(--size) - 10px);
    height: calc(var(--size) - 10px);
  }
  .searchIcon {
    color: #572589;
  }
  .search:focus-within {
    width: 100%;
  }
  .search:focus-within .searchInput {
    opacity: 1;
    z-index: initial;
    cursor: initial;
    width: calc(100% - var(--size));
  }
  .search:focus-within .searchButton {
    background-color: #572589;
    box-shadow: 0 0 10px grey(0, 0, 0, 0.15);
  }
  .search:focus-within .searchIcon {
    color: white;
  }
  .search:focus-within .searchButton:hover,
  .search:focus-within .searchButton:focus {
    outline: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
  }
  .threeDots {
    background: none;
    color: #572589;
    border: none;
  }
  .inputs {
    border: none;
    border-bottom: 2px solid #e6e6e6;
    border-radius: 0;
  }
  .inputs:focus,
  .threeDots:focus {
    box-shadow: none;
  }
  .showPass {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0.5em;
  }
  .submitButton {
    background-color: #572589;
  }
  .formTxt {
    color: #572589;
    cursor: pointer;
  }
</style>
