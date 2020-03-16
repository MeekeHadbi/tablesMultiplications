<template>
  <div>
    <br>
    <label for="user-input"> Entrainement sur la table de : </label>
    <input id="user-input" type="number" v-model="n">
  </div>
</template>

<script>
  import TableMultiplication from "../components/TableMultiplication.vue";
  export default {
    name: "entrainement",
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
