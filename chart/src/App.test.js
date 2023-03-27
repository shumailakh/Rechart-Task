import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Login from "./pages/Login";
import App from "./App";
import Dashboard from "./pages/Dashboard";

jest.mock("./pages/Login");
jest.mock("./pages/Dashboard");

describe("Tests for App Router", () => {
  test("Should render Login on default route", () => {
    // Arrange

    Login.mockImplementation(() => <div>LoginPageMock</div>);

    // Act
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("LoginPageMock")).toBeInTheDocument();
  });

  test("Should render Dashboard route", () => {
    // Arrange

    Dashboard.mockImplementation(() => <div>Dashboard</div>);


    render(
      <MemoryRouter initialEntries={["/dashboard/*"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });


});