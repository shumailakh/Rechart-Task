import { getByText, render, screen, within } from "@testing-library/react";
import StudentCreateList from "../components/StudentCreateList";
beforeEach(() => render(<StudentCreateList />));
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
test("Dashboard Component", () => {
  render(<StudentCreateList />);
});
test("Renders Dashboard correctly", () => {
  const { queryAllByText } = render(<StudentCreateList />);
  expect(queryAllByText(/New Student List/i)).toBeInTheDocument;
});