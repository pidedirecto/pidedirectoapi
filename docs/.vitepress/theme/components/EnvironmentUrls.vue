<script setup lang="ts">
import { ref } from "vue";
import {
  API_ENVIRONMENTS,
  type ApiEnvironmentId,
} from "../../environments";
import { useSelectedEnvironment } from "../composables/useSelectedEnvironment";

const { selectedEnv, setSelectedEnv, environments } = useSelectedEnvironment();
const environmentList = Object.values(API_ENVIRONMENTS);
const copiedEnv = ref<ApiEnvironmentId | null>(null);

async function copyBaseUrl(envId: ApiEnvironmentId): Promise<void> {
  const url = API_ENVIRONMENTS[envId].baseUrl;
  try {
    await navigator.clipboard.writeText(url);
    copiedEnv.value = envId;
    setTimeout(() => {
      if (copiedEnv.value === envId) copiedEnv.value = null;
    }, 2000);
  } catch {
    // Clipboard unavailable
  }
}
</script>

<template>
  <div class="environment-urls">
    <p class="environment-urls__intro">
      All API endpoints use <code>POST {baseUrl}/{methodName}</code> with the
      <code>x-api-key</code> header. See
      <a href="/guide/authentication">Authentication</a> for API key details.
    </p>

    <div class="environment-urls__default">
      <label class="environment-urls__default-label" for="default-env-select">
        Default environment for API pages
      </label>
      <select
        id="default-env-select"
        class="environment-urls__select"
        :value="selectedEnv"
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
    </div>

    <table class="environment-urls__table">
      <thead>
        <tr>
          <th>Environment</th>
          <th>Base URL</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="env in environmentList" :key="env.id">
          <td>
            <span
              class="environment-urls__badge"
              :class="`environment-urls__badge--${env.id}`"
            >
              {{ env.label }}
            </span>
          </td>
          <td>
            <code class="environment-urls__url">{{ env.baseUrl }}</code>
          </td>
          <td>
            <button
              type="button"
              class="environment-urls__copy"
              :class="{ 'environment-urls__copy--copied': copiedEnv === env.id }"
              @click="copyBaseUrl(env.id)"
            >
              {{ copiedEnv === env.id ? "Copied!" : "Copy" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
