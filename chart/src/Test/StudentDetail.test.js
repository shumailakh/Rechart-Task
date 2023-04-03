import { render, screen, fireEvent, act } from "@testing-library/react";
import React from "react";
import StudentDetail from "../components/StudentDetail";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("StudentDetails", () => {
  beforeEach(() => render(<StudentDetail />));
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

  test("render Student Details with Field", async () => {
    await act(async () => {
      render(<StudentDetail />);
      const UserNameField = screen.getByPlaceholderText(/Enter username/i);
      const EmailField = screen.getByPlaceholderText(/Enter Email/i);
      const NumberField = screen.getByPlaceholderText(/Enter Number/i);

      expect(UserNameField).toBeInTheDocument();

      expect(EmailField).toBeInTheDocument();
      expect(NumberField).toBeInTheDocument();
    });
  });
});
