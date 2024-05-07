import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./components/employee/Employee";
import HeaderNavbar from "./components/navbar/HeaderNavbar";
import Category from "./components/category/Category";
import Role from "./components/role/Role";
import Product from "./components/product/Product";
import Sales from "./components/sale/Sales";

function App() {
  return (
    <BrowserRouter>
      <HeaderNavbar></HeaderNavbar>
      <Routes>
        <Route path="/category" element={<Category></Category>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/employee" element={<Employee></Employee>}></Route>
        <Route path="/role" element={<Role></Role>}></Route>
        <Route path="/sales" element={<Sales></Sales>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
