import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EmpolyeeData from "./components/EmpolyeeData";
import Header from "./components/Header/Header";
import StudentCreate from "./components/StudentCreate";
import StudentDetail from "./components/StudentDetail";
import StudentEditProfile from "./components/StudentEditProfile";
import StudentRemove from "./components/StudentRemove";
import StudentCreateList from "./components/StudentCreateList";
function DashboardMenu() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />*/}
        <Route path="/dashboard/*" element={<Dashboard />} /> 
        <Route path="/empolyeeData" element={<EmpolyeeData />} />
        <Route path="/studentCreateList" element={<StudentCreateList />} />
        <Route path="/studentCreate" element={<StudentCreate />} />
        <Route path="/studentdetail/:empid" element={<StudentDetail />} />
        <Route path="/studenteditprofile/:empid" element={<StudentEditProfile />} />
        <Route path="/studentremove" element={<StudentRemove />} />
      </Routes>
      
    </div>
  );
}

export default DashboardMenu;
