<template>
  <div id="app">
    <ul class="nav">
      <li>
        <router-link to="/">Go to Home </router-link>
      </li>
      <li>
        <p> | </p>
      </li>
      <li>
        <router-link to="/article"> Go to Article</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  list-style: none;
  display: inline-flex;
}
</style>
