<script setup lang="ts">
import { computed, ref } from "vue";
import { useData } from "vitepress";
import {
  buildEndpointUrl,
  parseMethodFromTitle,
} from "../../environments";
import { useSelectedEnvironment } from "../composables/useSelectedEnvironment";
import type { ApiEnvironmentId } from "../../environments";

const { frontmatter } = useData();
const { selectedEnv, setSelectedEnv, environments } = useSelectedEnvironment();
const environmentList = Object.values(environments);
const copied = ref(false);

const methodName = computed(() => {
  const title = frontmatter.value?.title;
  if (typeof title !== "string") return null;
  return parseMethodFromTitle(title);
});

const endpointUrl = computed(() => {
  if (!methodName.value) return null;
  return buildEndpointUrl(selectedEnv.value, methodName.value);
});

async function copyUrl(): Promise<void> {
  if (!endpointUrl.value) return;
  try {
    await navigator.clipboard.writeText(endpointUrl.value);
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
  <div v-if="endpointUrl" class="endpoint-url-bar">
    <span class="endpoint-url-bar__label">Endpoint URL</span>
    <select
      class="endpoint-url-bar__select"
      :value="selectedEnv"
      aria-label="Environment"
      @change="
        setSelectedEnv(
          ($event.target as HTMLSelectElement).value as ApiEnvironmentId,
        )
      "
    >
      <option v-for="env in environmentList" :key="env.id" :value="env.id">
        {{ env.label }}
      </option>
    </select>
    <code class="endpoint-url-bar__url">
      <span class="endpoint-url-bar__method">POST</span>
      {{ endpointUrl }}
    </code>
    <button
      type="button"
      class="endpoint-url-bar__copy"
      :class="{ 'endpoint-url-bar__copy--copied': copied }"
      @click="copyUrl"
    >
      {{ copied ? "Copied!" : "Copy" }}
    </button>
  </div>
</template>
