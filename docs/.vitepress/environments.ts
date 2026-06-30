export const API_ENVIRONMENTS = {
  test: {
    id: "test",
    label: "TEST",
    baseUrl: "https://api.test.pidedirecto.mx",
  },
  production: {
    id: "production",
    label: "PRODUCTION",
    baseUrl: "https://api.pidedirecto.mx",
  },
} as const;

export type ApiEnvironmentId = keyof typeof API_ENVIRONMENTS;
export const DEFAULT_ENVIRONMENT: ApiEnvironmentId = "test";
export const ENV_STORAGE_KEY = "pidedirecto-docs-env";

export function buildEndpointUrl(
  envId: ApiEnvironmentId,
  methodName: string,
): string {
  const base = API_ENVIRONMENTS[envId].baseUrl.replace(/\/$/, "");
  return `${base}/${methodName}`;
}

export function parseMethodFromTitle(title: string): string | null {
  const match = /^POST\s+(\S+)/i.exec(title.trim());
  return match?.[1] ?? null;
}
