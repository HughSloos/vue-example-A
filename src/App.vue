<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
      <router-link to="/">Home</router-link>
      <router-link to="/P1">One</router-link>
      <router-link to="/P2">Two</router-link>
      <router-link to="/P3">Three</router-link>
    <router-outlet></router-outlet>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100vh;
}
</style>
