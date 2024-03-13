import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage"
import { DashboardLayout } from "../layout/DashboardLayout"
import { CategoriesPage } from "../pages/CategoriesPage"
import { GendersPage } from "../pages/GendersPage"
import { ProductsPage } from "../pages/ProductsPage"
import { UsersPage } from "../pages/UsersPage"


export const DashboardRoutes = () => {
    return (
        <Routes >
            <Route path="/" element={<DashboardLayout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="categories" element={<CategoriesPage />} />
                <Route path="genders" element={<GendersPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    )
}
