import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Login from "../pages/Login";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Login", () => {
  test("should have userid and password field ,also a submit button", () => {
    render(<Login />);
    const UserNameField = screen.getByPlaceholderText(/Enter username/i);
    const PasswordField = screen.getByPlaceholderText(/Enter Password/i);
    const SubmitButton = screen.getByText(/Submit/i);
    expect(UserNameField).toBeInTheDocument();
    expect(PasswordField).toBeInTheDocument();
    expect(SubmitButton).toBeInTheDocument();
  });
  test("render form properly", () => {
    render(<Login />);
    const UserNameField = screen.getByPlaceholderText(/Enter username/i);
    const PasswordField = screen.getByPlaceholderText(/Enter Password/i);
    expect(UserNameField).toHaveAttribute("type", "text");
    expect(PasswordField).toHaveAttribute("type", "password");
  });
  test("button should disable for empty name", () => {
    render(<Login />);
    const UserNameField = screen.getByPlaceholderText(/Enter username/i);
    fireEvent.change(UserNameField, { target: { value: "" } });
    const SubmitButton = screen.getByText(/Submit/i);
    expect(SubmitButton).toHaveAttribute("disabled");
  });
  test("button should enable for non empty value", () => {
    render(<Login />);
    const UserNameField = screen.getByPlaceholderText(/Enter username/i);
    fireEvent.change(UserNameField, { target: { value: "shumaila" } });
    const SubmitButton = screen.getByText(/Submit/i);
    expect(SubmitButton).not.toHaveAttribute("disabled");
  });
});
