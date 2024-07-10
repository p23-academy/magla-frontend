import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import RegisterView, {registerAction} from "./ui/auth/RegisterView.jsx";
import LoginView, {loginAction} from "./ui/auth/LoginView.jsx";
import CategoriesAdminListView, {categoriesListLoader} from "./ui/admin/categories/CategoriesAdminListView.jsx";
import CategoriesAdminNewItemView, {newCategoryFormAction} from "./ui/admin/categories/CategoriesAdminNewItemView.jsx";
import CategoriesAdminEditItemView, {editCategoryFormAction, editCategoryFormLoader} from "./ui/admin/categories/CategoriesAdminEditItemView.jsx";
import AdminLayout from "./ui/admin/AdminLayout.jsx";
import ItemsAdminListView, {itemsListLoader} from "./ui/admin/items/ItemsAdminListView.jsx";
import ItemsAdminNewItemView, {newItemFormAction, newItemLoader} from "./ui/admin/items/ItemsAdminNewItemView.jsx";
import ItemsAdminEditItemView, {editItemFormAction, editItemFormLoader} from "./ui/admin/items/ItemsAdminEditItemView.jsx";
import ShopLayout, {shopLayoutLoader} from "./ui/shop/ShopLayout.jsx";
import ItemsGridView, {itemsGridViewLoader} from "./ui/shop/items/ItemsGridView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/app",
    element: <App/>,
  },
  {
    path: "/register",
    action: registerAction,
    element: <RegisterView/>,
  },
  {
    path: "/login",
    action: loginAction,
    element: <LoginView/>,
  },
  {
    path: "/shop",
    loader: shopLayoutLoader,
    element: <ShopLayout/>,
    children: [
      {
        path: "/shop/:catId",
        loader: itemsGridViewLoader,
        element: <ItemsGridView/>,
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout/>,
    children: [
      {
        path: "/admin/categories",
        loader: categoriesListLoader,
        element: <CategoriesAdminListView/>,
      },
      {
        path: "/admin/categories/new",
        action: newCategoryFormAction,
        element: <CategoriesAdminNewItemView/>,
      },
      {
        path: "/admin/categories/edit/:id",
        loader: editCategoryFormLoader,
        action: editCategoryFormAction,
        element: <CategoriesAdminEditItemView/>,
      },
      {
        path: "/admin/items",
        loader: itemsListLoader,
        element: <ItemsAdminListView/>,
      },
      {
        path: "/admin/items/new",
        loader: newItemLoader,
        action: newItemFormAction,
        element: <ItemsAdminNewItemView/>,
      },
      {
        path: "/admin/items/edit/:id",
        loader: editItemFormLoader,
        action: editItemFormAction,
        element: <ItemsAdminEditItemView/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
