import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Register from "../pages/Register";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Register", () => {
  test("should have All field ,also a submit button", () => {
    render(<Register />);
    const UserNameField = screen.getByPlaceholderText(/Enter username/i);
    const UserIdField = screen.getByPlaceholderText(/Enter Email ID/i);
    const NumberField = screen.getByPlaceholderText(/Enter Mobile Number/i);
    const PasswordField = screen.getByPlaceholderText(/Enter Password/i);
    const SubmitButton = screen.getByText(/Submit/i);
    expect(UserNameField).toBeInTheDocument();
    expect(UserIdField).toBeInTheDocument();
    expect(NumberField).toBeInTheDocument();
    expect(PasswordField).toBeInTheDocument();
    expect(SubmitButton).toBeInTheDocument();
  });

  test("button should enable for non empty value", () => {
    render(<Register />);
    const UserNameField = screen.getByPlaceholderText(/Enter username/i);
    fireEvent.change(UserNameField, { target: { value: "shumaila" } });
    const SubmitButton = screen.getByText(/Submit/i);
    expect(SubmitButton).toHaveAttribute("type");
  });
});
