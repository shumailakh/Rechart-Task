import { render } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import Charts from "../components/Charts/Charts";

test("Dashboard Component", () => {
  render(<Dashboard />);
});
test("chart Component", () => {
  render(<Charts />);
});

