import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import employeeReducer from "../features/employee/employeeSlice";
import roleReducer from "../features/role/roleSlice";
import permissionReducer from "../features/permissions/permissionSlice";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    category: categoryReducer,
    role: roleReducer,
    employee: employeeReducer,
    permission: permissionReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
