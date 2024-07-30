export const removeExtraQuotes = (str) => {
  if (str.startsWith('"') && str.endsWith('"')) {
      str = str.slice(1, -1);
  }

  if (str.startsWith("'") && str.endsWith("'")) {
      str = str.slice(1, -1);
  }

  return str;
}