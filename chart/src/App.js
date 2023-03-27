import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
<Routes>
				
				<Route path="/" element={<Login />} />
				<Route path="login" element={<Login />} />
				<Route path="/dashboard/*" element={<Dashboard />} />
			
			</Routes>
    </div>
  );
}

export default App;
