import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage, ErrorPage, HomePage, OffersPage, ProductsPage } from "../pages"
import { PublicLayout } from "../layout/PublicLayout"


export const PublicRoutes = () => {
    return (
        <Routes >
            <Route path="/" element={<PublicLayout />} >
                <Route path="/" element={<HomePage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="offers" element={<OffersPage />} />

                <Route path="/*" element={<Navigate to="/" />} />
                {/* <Route path="/*" element={<ErrorPage />} /> */}
            </Route>
        </Routes>
    )
}
