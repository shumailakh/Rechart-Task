import { render, screen, fireEvent,act } from "@testing-library/react";
import React from "react";
import StudentEditProfile from "../components/StudentEditProfile";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Register", () => {
  beforeEach(() => render(<StudentEditProfile />));
  async function withFetch() {
    const res = await fetch("http://localhost:8000/student/");
    const json = await res.json();

    return json;
  }
  // This is the section where we mock `fetch`
  const unmockedFetch = global.fetch;

  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      });
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  test("works", async () => {
    const json = await withFetch();
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(0);
  });

  test("render Student Edit Profile", async () => {
    await act(async () => {
      render(<StudentEditProfile />);
      const UserNameField = screen.getByPlaceholderText(/Enter username/i);
      const IdField = screen.getByPlaceholderText(/Enter Id/i);
      const EmailField = screen.getByPlaceholderText(/Enter Email ID/i);
      const NumberField = screen.getByPlaceholderText(/Enter Mobile Number/i);
      const checkbox = screen.getByLabelText(/Active/i);
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
  });
  test("Test save Button", async () => {
    await act(async () => {
      render(<StudentEditProfile />);
      const UserNameField = screen.getByPlaceholderText(/Enter username/i);
      fireEvent.change(UserNameField, { target: { value: "shumaila" } });
      const SubmitButton = screen.getByText(/Save/i);
      expect(SubmitButton).toHaveAttribute("type");
    });
  });
});
