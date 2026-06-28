import { generateCTATestCases } from "./generateCTATestCases";
import { generateGlobalCTATestCases } from "./generateGlobalCTATestCases";
import { ctaRegistry } from "../test_data/CTA/pages.cta.registry";
import { globalCtaRegistry } from "../../framework/test_data/CTA/global.cta.registry";

export function generateAllCTATestCases() {
  return [
    ...generateCTATestCases(ctaRegistry),
    ...generateGlobalCTATestCases(globalCtaRegistry),
  ];
}
