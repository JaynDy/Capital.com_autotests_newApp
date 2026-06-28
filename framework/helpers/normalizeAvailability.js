export function normalizeAvailability(config) {
  if (!config) {
    return {
      licenses: null,
      languages: null,
    };
  }

  if (Array.isArray(config)) {
    return {
      licenses: config,
      languages: null,
    };
  }

  return {
    licenses: config.licenses ?? null,
    languages: config.languages ?? null,
  };
}
