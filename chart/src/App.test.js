import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import StudentCreate from "./components/StudentCreate";
import StudentCreateList from "./components/StudentCreateList";
import StudentDetail from "./components/StudentDetail";
import StudentEditProfile from "./components/StudentEditProfile";

jest.mock("./pages/Login");
jest.mock("./pages/Register");
jest.mock("./pages/Dashboard");
jest.mock("./components/StudentCreate");
describe("Tests for App Router", () => {
  test("Should render register as default page ", () => {
    Register.mockImplementation(() => <div>Register</div>);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Register")).toBeInTheDocument();
  });
  test("Should render Login after submit register page", () => {
    Login.mockImplementation(() => <div>LoginPageMock</div>);

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByText("LoginPageMock")).toBeInTheDocument();
  });

  test("Should render Dashboard route", () => {
    Dashboard.mockImplementation(() => <div>Dashboard</div>);

    render(
      <MemoryRouter initialEntries={["/dashboard/*"]}>
        <Dashboard />
      </MemoryRouter>
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
  test("Should render All details Page ", () => {


    render(
      <MemoryRouter>
        <StudentCreate />
        <StudentCreateList/>
        <StudentDetail/>
        <StudentEditProfile/>
      </MemoryRouter>
    );

  });
});
