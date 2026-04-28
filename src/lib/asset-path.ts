const ABSOLUTE_URL_PATTERN = /^https?:\/\//i;

export function resolveAssetPath(fileName: string | undefined | null, fallback: string): string {
  const value = (fileName ?? "").trim();

  if (!value) {
    return fallback;
  }

  if (ABSOLUTE_URL_PATTERN.test(value) || value.startsWith("/")) {
    return value;
  }

  const normalized = value.replace(/^assets\//i, "").replace(/^\.\//, "");
  return `/assets/${normalized}`;
}
