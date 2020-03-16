<template>
  <div>
    <h3>Les tables de multiplications</h3>
    <input type="radio" id="10" name="10" value="10" v-model="choice">
    <label for="10">10</label>
    <input type="radio" id="13" name="13" value="13" v-model="choice">
    <label for="13">13</label><br>
    <les-tables-multiplication v-bind:choice="parseInt(choice)"/>
  </div>
</template>

<script>
  import LesTablesMultiplication from "../components/LesTablesMultiplication.vue";
  export default {
    name: "tables",
    data: function () {
      return {
        choice: 10
      };
    },
    components: {
      LesTablesMultiplication,
    }
  };
</script>