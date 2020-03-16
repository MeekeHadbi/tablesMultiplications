<template>
  <div>
    <h3>Les Tables De Multplications</h3>
    <span v-for="k in 10" :key="k">
      <p>
        <table-multiplication v-bind:n="parseInt(k)" />&nbsp;
      </p>
    </span>
  </div>
</template>

<script>
import TableMultiplication from "./TableMultiplication.vue";

export default {
  name: "LesTablesMultiplication",
  components: {
    TableMultiplication
  },
  props: {
    n: Number
  }
};
</script>

<style>
p {
  display: inline-block;
  margin-left: 20px;
}
</style>