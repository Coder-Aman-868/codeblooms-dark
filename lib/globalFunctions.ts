export function getPopulateQuery(fields: string[], pop?: boolean) {
  if (!fields.length) return "";
  const queryStart = pop ? "&" : "?";
  return (
    queryStart + fields.map((field: string) => `populate=${field}`).join("&")
  );
}
