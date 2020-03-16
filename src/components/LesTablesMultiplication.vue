<template>
  <div>
    <p>test: {{choice}}</p>
    <span v-for="k in choice" :key="k">
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
    n: Number,
    choice: Number
  }
};
</script>

<style>
p {
  display: inline-block;
  margin-left: 20px;
}
</style>