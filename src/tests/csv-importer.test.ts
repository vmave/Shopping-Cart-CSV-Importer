import { updateCart } from "../components/cart";
import { validateCSVHeaders } from "../utils/validation";

describe("validateCSVHeaders", () => {
  it("should return true for valid headers", () => {
    const validHeaders = ["articleNumber", "quantity"];
    expect(validateCSVHeaders(validHeaders)).toBe(true);
  });

  it("should return false if there are more than two columns", () => {
    const invalidHeaders = ["articleNumber", "quantity", "price"];
    expect(validateCSVHeaders(invalidHeaders)).toBe(false);
  });

  it("should return false if column names are incorrect", () => {
    const invalidHeaders = ["articleId", "count"];
    expect(validateCSVHeaders(invalidHeaders)).toBe(false);
  });
});

describe("updateCart", () => {
  beforeEach(() => {
    document.body.innerHTML = `<ul id="cartItems"></ul>`;
  });

  it("should update the cart with the correct items", () => {
    const items = [
      { articleNumber: "A123", quantity: 2 },
      { articleNumber: "B456", quantity: 5 },
    ];

    updateCart(items);

    const cartItemsList = document.getElementById("cartItems")!;
    const listItems = cartItemsList.querySelectorAll("li");

    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toBe("Article: A123, Quantity: 2");
    expect(listItems[1].textContent).toBe("Article: B456, Quantity: 5");
  });

  it("should clear previous cart items before updating", () => {
    const initialItems = [{ articleNumber: "A123", quantity: 1 }];
    updateCart(initialItems);

    const newItems = [{ articleNumber: "B456", quantity: 3 }];
    updateCart(newItems);

    const cartItemsList = document.getElementById("cartItems")!;
    const listItems = cartItemsList.querySelectorAll("li");

    expect(listItems.length).toBe(1);
    expect(listItems[0].textContent).toBe("Article: B456, Quantity: 3");
  });
});
