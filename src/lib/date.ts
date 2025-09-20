export function parseDate(dateStr: string): Date {
  if (!dateStr || dateStr.toLowerCase() === "present") {
    return new Date();
  }

  const parts = dateStr.split("-");

  if (parts.length === 3) {
    const [d, m, y] = parts.map((p) => parseInt(p, 10));
    return new Date(y, m - 1, d);
  }

  if (parts.length === 2) {
    const [m, y] = parts.map((p) => parseInt(p, 10));
    return new Date(y, m - 1, 1);
  }

  return new Date(dateStr);
}
