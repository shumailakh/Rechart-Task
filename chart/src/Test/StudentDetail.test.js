import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import StudentDetail from "../components/StudentDetail";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Register", () => {
  test("should have All field ,also a submit button", () => {
    render(<StudentDetail />);
    const UserNameField = screen.getByPlaceholderText(/Enter username/i);
    const EmailField = screen.getByPlaceholderText(/Enter Email/i);
    const NumberField = screen.getByPlaceholderText(/Enter Number/i);

    expect(UserNameField).toBeInTheDocument();
  
    expect(EmailField).toBeInTheDocument();
    expect(NumberField).toBeInTheDocument();

  });


});
