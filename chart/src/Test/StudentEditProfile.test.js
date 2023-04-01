import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import StudentEditProfile from "../components/StudentEditProfile";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Register", () => {
  test("should have All field ,also a submit button", () => {
    render(<StudentEditProfile />);
    const UserNameField = screen.getByPlaceholderText(/Enter username/i);
    const IdField = screen.getByPlaceholderText(/Enter Id/i);
    const EmailField = screen.getByPlaceholderText(/Enter Email ID/i);
    const NumberField = screen.getByPlaceholderText(/Enter Mobile Number/i);
    const checkbox =screen.getByLabelText(/Active/i);
    const SubmitButton = screen.getByText(/Save/i);
    const BackButton = screen.getByText(/Back/i);
    expect(UserNameField).toBeInTheDocument();
    expect(IdField).toBeInTheDocument();
    expect(EmailField).toBeInTheDocument();
    expect(NumberField).toBeInTheDocument();
    expect(BackButton).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(SubmitButton).toBeInTheDocument();
  });

  test("button should enable for non empty value", () => {
    render(<StudentEditProfile />);
    const UserNameField = screen.getByPlaceholderText(/Enter username/i);
    fireEvent.change(UserNameField, { target: { value: "shumaila" } });
    const SubmitButton = screen.getByText(/Save/i);
    expect(SubmitButton).toHaveAttribute("type");
  });
});
