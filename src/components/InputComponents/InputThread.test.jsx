// using arrange, action, assert techniques

// scenario testing thread input in add thread page

// - InputThread component
// - handles typing the title inside the title input properly
// - handles typing the category inside the category input properly
// - handles typing the body content inside the body input properly

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import InputThread from "./InputThread";

describe("InputThread component", () => {
  it("should handle title typing correctly", async () => {
    render(<InputThread addThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText("Title");

    await userEvent.type(titleInput, "titleTest");

    expect(titleInput).toHaveValue("titleTest");
  });

  it("should handle category typing correctly", async () => {
    render(<InputThread addThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText(
      "Category (opsional)"
    );

    await userEvent.type(categoryInput, "categorytest");

    expect(categoryInput).toHaveValue("categorytest");
  });

  it("should handle body typing correctly", async () => {
    render(<InputThread addThread={() => {}} />);
    const bodyInput = await screen.getByTestId("input-body");

    await userEvent.click(bodyInput);
    await userEvent.keyboard("bodytest");

    expect(bodyInput.textContent).toBe("bodytest");
  });
});
