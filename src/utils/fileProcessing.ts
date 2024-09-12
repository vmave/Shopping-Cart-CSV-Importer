import * as Papa from "papaparse";
import { updateCart } from "../components/cart";
import { validateCSVHeaders, validateCartItems } from "./validation";

export function handleFileUpload(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  const messageElement = document.getElementById("message")!;

  if (!file) {
    messageElement.textContent = "Please select a file.";
    messageElement.className = "error";
    return;
  }

  Papa.parse<any>(file, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      const headers = results.meta.fields || [];
      const parsedData = results.data;

      if (!validateCSVHeaders(headers)) {
        messageElement.textContent =
          "Invalid CSV format. Must contain exactly two columns: 'articleNumber' and 'quantity'.";
        messageElement.className = "error";
        return;
      }

      if (!validateCartItems(parsedData)) {
        messageElement.textContent =
          "Invalid CSV format or non-numeric quantity.";
        messageElement.className = "error";
      } else {
        updateCart(parsedData);
        messageElement.textContent = "Items successfully added to the cart.";
        messageElement.className = "success";
      }
    },
    error: (error: unknown) => {
      messageElement.textContent = "Error parsing the CSV file.";
      messageElement.className = "error";
      console.error(error);
    },
  });
}
