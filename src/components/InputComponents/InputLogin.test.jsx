// using arrange, action, assert techniques

// scenario testing input in login page

// - InputLogin component
// - should properly handle email input on login page
// - should properly handle password input on login page
// - calls the login function when the login button is clicked

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import InputLogin from "./InputLogin";

describe("InputLogin component", () => {
  it("should handle email typing correctly", async () => {
    render(<InputLogin login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText("Email");

    await userEvent.type(emailInput, "riko@email.com");

    expect(emailInput).toHaveValue("riko@email.com");
  });

  it("should handle password typeing correctly", async () => {
    render(<InputLogin login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText("Password");

    await userEvent.type(passwordInput, "qazwsxedc");

    expect(passwordInput).toHaveValue("qazwsxedc");
  });

  it("should call login function when login button is clicked", async () => {
    const mockLogin = jest.fn();
    render(<InputLogin login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText("Email");
    await userEvent.type(emailInput, "riko@gmail.com");
    const passwordInput = await screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "qazwsxedc");
    const loginButton = await screen.getByRole("button", { name: "Login" });

    await userEvent.click(loginButton);

    expect(mockLogin).toBeCalledWith({
      email: "riko@gmail.com",
      password: "qazwsxedc",
    });
  });
});
