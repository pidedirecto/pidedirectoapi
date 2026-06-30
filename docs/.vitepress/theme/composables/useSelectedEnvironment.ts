import { ref, type Ref } from "vue";
import {
  API_ENVIRONMENTS,
  DEFAULT_ENVIRONMENT,
  ENV_STORAGE_KEY,
  type ApiEnvironmentId,
} from "../../environments";

const selectedEnv: Ref<ApiEnvironmentId> = ref(DEFAULT_ENVIRONMENT);
let initialized = false;

function readStoredEnv(): ApiEnvironmentId {
  if (typeof localStorage === "undefined") {
    return DEFAULT_ENVIRONMENT;
  }

  const stored = localStorage.getItem(ENV_STORAGE_KEY);
  if (stored && stored in API_ENVIRONMENTS) {
    return stored as ApiEnvironmentId;
  }

  return DEFAULT_ENVIRONMENT;
}

function ensureInitialized(): void {
  if (initialized) return;
  selectedEnv.value = readStoredEnv();
  initialized = true;
}

export function useSelectedEnvironment() {
  ensureInitialized();

  function setSelectedEnv(id: ApiEnvironmentId): void {
    selectedEnv.value = id;
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(ENV_STORAGE_KEY, id);
    }
  }

  return {
    selectedEnv,
    setSelectedEnv,
    environments: API_ENVIRONMENTS,
  };
}
