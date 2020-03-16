<template>
  <div>
    <h3 v-if="n==parseInt(n,10)">Table de {{n}}</h3>
    <h3 v-else>Table de 0</h3>
    <table class="table-multiplication">
      <tbody v-if="n==parseInt(n,10)">
        <TableRow v-for="k in 10" :key="k" v-bind:j="k" v-bind:i="n" />
      </tbody>
      <tbody v-else>
        <TableRow v-for="k in 10" :key="k" v-bind:j="k" v-bind:i="0" />
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from "./TableRow.vue";

export default {
  name: "TableMultiplication",
  components: {
    TableRow
  },
  props: {
    n: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-multiplication {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: lightblue;
}
</style>
