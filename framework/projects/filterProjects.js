function normalizeFilter(filter) {
  if (!filter) return null;

  const arr = filter
    .split(",")
    .map((v) => v.trim().toLowerCase())
    .filter(Boolean);

  return arr.length ? arr : null;
}

function matches(value, filter) {
  if (!filter) return true;
  if (value === undefined || value === null) return false;

  return filter.includes(String(value).toLowerCase());
}

function matchesLangCode(code, langFilter) {
  if (!langFilter) return true;
  if (!code) return false;

  const normalizedCode = code.toLowerCase();

  return langFilter.some((filter) => {
    const normalizedFilter = filter.toLowerCase();

    return (
      normalizedCode === normalizedFilter ||
      normalizedCode.startsWith(`${normalizedFilter}-`)
    );
  });
}

function matchesLang(project, langFilter) {
  if (!langFilter) return true;

  const code = project.use.variantCode;
  return matchesLangCode(code, langFilter);
}

function matchesLicense(licenseName, licenseFilter) {
  if (!licenseFilter) return true;
  if (!licenseName) return false;

  return licenseFilter.includes(licenseName.toLowerCase());
}

export function filterProjects(projects, filter) {
  const licenseFilter = normalizeFilter(filter.license);
  const userFilter = normalizeFilter(filter.user);
  const browserFilter = normalizeFilter(filter.browser);
  const langFilter = normalizeFilter(filter.lang);

  return projects.filter((p) => {
    const license = p.use?.licenseName;
    const user = p.use?.userState;
    const browser = p.use?.browserName;

    if (!matchesLicense(license, licenseFilter)) return false;
    if (!matches(user, userFilter)) return false;
    if (!matches(browser, browserFilter)) return false;
    if (!matchesLang(p, langFilter)) return false;

    return true;
  });
}
