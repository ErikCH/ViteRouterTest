<script setup>
import useStore from "../composables/useStore";
import { useRoute } from "vue-router";
const route = useRoute();

const { store, addInfo, double } = useStore(route);
</script>
<template>
  <h1>Store: {{ store }}</h1>
  <h3>Double: {{ double }}</h3>
  <button @click="addInfo(20)">Add 20</button>
</template>
