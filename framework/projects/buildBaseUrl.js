import { BASE_URL } from "../config/baseURL.js";

export function buildBaseUrl(license, variant) {
  // For licenses without prefix (CySEC)
  if (!license.prefix) {
    return `${BASE_URL}/${variant.code}`;
  }

  // For SCB when zn-hant, zh-hans
  if (variant.noPrefix) {
    return `${BASE_URL}/${variant.code}`;
  }

  // For licenses with prefix
  return `${BASE_URL}/${variant.code}-${license.prefix}`;
}
