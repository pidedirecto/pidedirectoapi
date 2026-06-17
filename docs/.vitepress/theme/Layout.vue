<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData, useRoute } from "vitepress";
import { watch, nextTick, onMounted, computed } from "vue";
import { enhanceParamTables } from "./collapsibleParamTables";

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
const route = useRoute();

const pageTitle = computed(() => {
  const { layout, title } = frontmatter.value;
  if (layout === "home" || layout === "page") return null;
  return typeof title === "string" ? title : null;
});

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
    <template v-if="pageTitle" #doc-before>
      <div class="vp-doc endpoint-page-title">
        <h1>{{ pageTitle }}</h1>
      </div>
    </template>
  </Layout>
</template>
