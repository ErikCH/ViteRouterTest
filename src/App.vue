<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <main>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/route1">Go to route1</router-link>
  </main>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
main {
  width: 300px;
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding: 20px;
}
</style>
