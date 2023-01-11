import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import InputRegister from "./InputRegister";

describe("InputRegister component", () => {
  it("should handle name typing correctly", async () => {
    render(<InputRegister register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText("Name");

    await userEvent.type(nameInput, "riko");

    expect(nameInput).toHaveValue("riko");
  });

  it("should handle email typing correcly", async () => {
    render(<InputRegister register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText("Email");

    await userEvent.type(emailInput, "riko@gmail.com");

    expect(emailInput).toHaveValue("riko@gmail.com");
  });

  it("should handle password typing correcly", async () => {
    render(<InputRegister register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText("Password");

    await userEvent.type(passwordInput, "qazwsxedc");

    expect(passwordInput).toHaveValue("qazwsxedc");
  });

  it("should call register function when register button is clicked", async () => {
    // arrange
    const mockRegister = jest.fn();
    render(<InputRegister register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText("Name");
    await userEvent.type(nameInput, "riko");
    const emailInput = await screen.getByPlaceholderText("Email");
    await userEvent.type(emailInput, "riko@gmail.com");
    const passwordInput = await screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "qazwsxedc");
    const registerButton = await screen.getByRole("button", {
      name: "Register",
    });

    // action
    await userEvent.click(registerButton);

    // assert
    expect(mockRegister).toBeCalledWith({
      name: "riko",
      email: "riko@gmail.com",
      password: "qazwsxedc",
    });
  });
});
