<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";
import { watch, nextTick, onMounted, computed } from "vue";
import { enhanceParamTables } from "./collapsibleParamTables";
import EndpointUrlBar from "./components/EndpointUrlBar.vue";

const { Layout } = DefaultTheme;
const route = useRoute();

const isApiPage = computed(() => route.path.startsWith("/api/"));

function run(): void {
  nextTick(() => {
    enhanceParamTables(document.querySelector(".vp-doc"));
  });
}

onMounted(run);
watch(() => route.path, run);
</script>

<template>
  <Layout>
    <template #doc-top>
      <EndpointUrlBar v-if="isApiPage" />
    </template>
  </Layout>
</template>
