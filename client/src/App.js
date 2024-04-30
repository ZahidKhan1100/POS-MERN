import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/category/Category";
import Employee from "./components/employee/Employee";

import HeaderNavbar from "./components/navbar/HeaderNavbar";

function App() {
  return (
    <BrowserRouter>
      <HeaderNavbar></HeaderNavbar>
      <Routes>
        <Route path="/category" element={<Category></Category>}></Route>
        <Route path="/employee" element={<Employee></Employee>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
