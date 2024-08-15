function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

function capitalize(str: string): string {
  if (str.length === 0 || typeof str !== "string") {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { formatDate, capitalize };
