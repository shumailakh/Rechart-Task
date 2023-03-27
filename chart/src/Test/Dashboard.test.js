import { render, fireEvent, screen } from "@testing-library/react";

import Dashboard from "../pages/Dashboard";
import Charts from "../components/Charts/Charts";
import Header from "../components/Header/Header";
test("Dashboard Component", () => {
    // render the component on virtual dom
    render(<Dashboard />);

});
test ("chart Component",()=>{
    render(<Charts/>)
})
test ("Header Component",()=>{
    render(<Header/>)
})
