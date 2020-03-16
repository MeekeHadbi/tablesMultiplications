<template>
  <div>
    <br>
    <label for="user-input"> Entrez une valeur : </label>
    <input id="user-input" type="text" v-model="n">
    <TableMultiplication v-bind:n="parseInt(n)"/>
  </div>
</template>

<script>
  import TableMultiplication from "../components/TableMultiplication.vue";
  export default {
    name: "home",
    data: function () {
      return {
        n: 1
      };
    },
    components: {
      TableMultiplication,
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
  }

  html body{
  padding: 0 0;
  margin: 0 0;
}

</style>
