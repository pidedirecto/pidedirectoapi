<script setup lang="ts">
import { computed, ref, onMounted, watch, nextTick } from "vue";
import { useData, useRoute } from "vitepress";
import {
  buildEndpointPath,
  parseMethodFromTitle,
} from "../../environments";

const { frontmatter } = useData();
const route = useRoute();
const rootRef = ref<HTMLElement | null>(null);
const copied = ref(false);

const methodName = computed(() => {
  const title = frontmatter.value?.title;
  if (typeof title !== "string") return null;
  return parseMethodFromTitle(title);
});

const endpointPath = computed(() => {
  if (!methodName.value) return null;
  return buildEndpointPath(methodName.value);
});

function placeAfterTitle(): void {
  nextTick(() => {
    const root = rootRef.value;
    if (!root) return;

    const h1 = document.querySelector(".content-container .vp-doc h1");
    if (!h1) return;

    if (h1.nextElementSibling !== root) {
      h1.insertAdjacentElement("afterend", root);
    }
  });
}

onMounted(placeAfterTitle);
watch(() => route.path, placeAfterTitle);

async function copyPath(): Promise<void> {
  if (!endpointPath.value) return;
  try {
    await navigator.clipboard.writeText(endpointPath.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch {
    // Clipboard unavailable
  }
}
</script>

<template>
  <div
    v-if="endpointPath"
    ref="rootRef"
    class="endpoint-path"
  >
    <code class="endpoint-path__url">{{ endpointPath }}</code>
    <button
      type="button"
      class="endpoint-path__copy"
      :class="{ 'endpoint-path__copy--copied': copied }"
      :aria-label="copied ? 'Copied' : 'Copy endpoint path'"
      @click="copyPath"
    />
  </div>
</template>
