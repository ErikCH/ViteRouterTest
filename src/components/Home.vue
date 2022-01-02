<script setup>
import { Erik } from "./erik";
import useStore from "../composables/useStore";
import { useRoute } from "vue-router";
const route = useRoute();
const hi = "boo";
const { store, addInfo, double } = useStore(route);
</script>
<template>
  <button @click="clicked()">Clicked</button>
  Hello {{ hi }}
  {{ store }}
  <h3>Double: {{ double }}</h3>

  <button @click="addInfo(10)">Add 10</button>
  <Erik />
</template>
