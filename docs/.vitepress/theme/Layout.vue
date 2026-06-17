<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";
import { watch, nextTick, onMounted } from "vue";
import { enhanceParamTables } from "./collapsibleParamTables";

const { Layout } = DefaultTheme;
const route = useRoute();

function run(): void {
  nextTick(() => {
    enhanceParamTables(document.querySelector(".vp-doc"));
  });
}

onMounted(run);
watch(() => route.path, run);
</script>

<template>
  <Layout />
</template>
