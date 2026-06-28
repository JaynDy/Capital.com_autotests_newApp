import fs from "fs";

export function isAuthStateValid(filePath) {
  try {
    if (!fs.existsSync(filePath)) return false;

    const stat = fs.statSync(filePath);

    const MAX_AGE_MS = 24 * 60 * 60 * 1000;

    return Date.now() - stat.mtimeMs < MAX_AGE_MS;
  } catch {
    return false;
  }
}
