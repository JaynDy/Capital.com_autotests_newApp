import path from "path";
import { buildBaseUrl } from "./buildBaseUrl";

export function makeProject({ browser, license, user, variant }) {
  const name = `${browser.name}-${license.name}-${variant.code}-${user.name}`;

  const storageState =
    user.name === "authorised"
      ? path.resolve(`storage/auth/${browser.name}-${user.name}.json`)
      : undefined;

  return {
    name,

    use: {
      ...browser.device,
      baseURL: buildBaseUrl(license, variant),
      storageState,
      licenseName: license.name,
      browserName: browser.name,
      userState: user.name,
      variantCode: variant.code,
      lang: variant.code.split("-")[0],

      extraHTTPHeaders: {
        "Accept-Language": variant.code.split("-")[0],
      },
      _licenseRef: license,
    },
  };
}
