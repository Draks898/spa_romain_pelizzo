<template>
  <div id="app">
    <ul class="nav">
      <li>
        <button class="border-button ">
          <router-link to="/">aller à la liste d'article </router-link>
        </button>
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
  display: flex;

}

.border-button {
  background-color: white;
  border: solid 5px #70fc51;
  transition: border-width 0.6s linear;
}

.border-button:hover {
  border-width: 10px;
}
</style>
