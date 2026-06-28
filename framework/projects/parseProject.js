export function parseProject(project) {
  const { use } = project;
  return {
    browserName: use.browserName,
    licenseName: use.licenseName,
    userState: use.userState,
    variantCode: use.variantCode,
    lang: use.lang,
  };
}
