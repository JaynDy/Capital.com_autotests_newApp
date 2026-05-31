import { licenses } from "../config/licenses.config.js";
import { userStates } from "../config/users.config.js";
import { makeProject } from "./makeProject.js";

export function createProjects(devices, filter = {}) {
  const projects = [];

  const licenseFilter = filter.license
    ? filter.license.split(",").map((v) => v.trim())
    : null;

  const langFilter = filter.lang
    ? filter.lang.split(",").map((v) => v.trim())
    : null;

  const browsers = [
    { name: "chromium", device: devices["Desktop Chrome"] },
    { name: "webkit", device: devices["Desktop Safari"] },
  ];

  for (const browser of browsers) {
    for (const license of licenses) {
      if (licenseFilter && !licenseFilter.includes(license.name)) {
        continue;
      }

      for (const user of userStates) {
        const variants = langFilter
          ? license.variants.filter((v) =>
              langFilter.includes(
                v.code.includes("-") ? v.code.split("-")[0] : v.code,
              ),
            )
          : license.variants;

        for (const variant of variants) {
          projects.push(
            makeProject({
              browser,
              license,
              user,
              variant,
            }),
          );
        }
      }
    }
  }

  return projects;
}
