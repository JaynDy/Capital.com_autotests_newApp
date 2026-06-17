export function isAllowed(value, allowedList) {
  if (!allowedList) return true;

  return allowedList.map((v) => v.toLowerCase()).includes(value.toLowerCase());
}
