<template>
  <h1>{{ name }}</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const name = "232323";
    return {
      name,
    };
  },
});
</script>
