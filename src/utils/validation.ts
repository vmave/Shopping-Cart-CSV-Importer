export function validateCSVHeaders(headers: string[]): boolean {
  return (
    headers.length === 2 &&
    headers.includes("articleNumber") &&
    headers.includes("quantity")
  );
}

export function validateCartItems(items: any[]): boolean {
  return items.every(
    (item) => item.articleNumber && !isNaN(Number(item.quantity))
  );
}
