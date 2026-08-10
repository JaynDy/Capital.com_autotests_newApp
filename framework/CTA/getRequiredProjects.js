export function getRequiredProjects(testCases) {
  const licenses = new Set();
  const languages = new Set();

  for (const testCase of testCases) {
    testCase.allowedLicenses?.forEach((l) => licenses.add(l));
    testCase.allowedLanguages?.forEach((l) => languages.add(l));
  }

  return {
    licenses: [...licenses],
    languages: [...languages],
  };
}
