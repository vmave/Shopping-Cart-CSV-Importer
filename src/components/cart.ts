interface CartItem {
  articleNumber: string;
  quantity: number;
}

export function updateCart(items: CartItem[]) {
  const cartItemsList = document.getElementById("cartItems")!;
  cartItemsList.innerHTML = "";

  for (const item of items) {
    const listItem = document.createElement("li");
    listItem.textContent = `Article: ${item.articleNumber}, Quantity: ${item.quantity}`;
    cartItemsList.appendChild(listItem);
  }
}
