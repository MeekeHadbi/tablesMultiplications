<template>
  <div id="app">
    <nav class="topnav">
      <a class="active"><router-link to="/">&nbsp;Home</router-link></a>
      <a><router-link to="/tables">&nbsp;Les tables</router-link></a>
    </nav>
    <img alt="Vue logo" src="./assets/logo.png" width="100" height="100">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "app"
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .topnav {
  margin-bottom: 25px;
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 10px 12px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}
</style>
