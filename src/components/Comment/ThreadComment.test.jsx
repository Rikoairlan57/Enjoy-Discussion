// using arrange, action, assert techniques

// scenario testing thread comment

// - ThreadComment Component
// - melalukan this test should properly handle typing thread comments

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ThreadComment from "./ThreadComment";

describe("ThreadComment component", () => {
  it("should handle content typing correctly", async () => {
    render(<ThreadComment addComment={() => {}} />);
    const inputContent = await screen.getByTestId("input-content");

    await userEvent.click(inputContent);
    await userEvent.keyboard("contenttest");

    expect(inputContent.textContent).toBe("contenttest");
  });
});
