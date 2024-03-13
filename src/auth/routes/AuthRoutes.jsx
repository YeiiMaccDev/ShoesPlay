import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { AuthLayout } from "../layout/AuthLayout"


export const AuthRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AuthLayout />} >
                    <Route path="/" element={<LoginPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="/*" element={<Navigate to="login" />} />

                    {/* <Route path="register" element={<RegisterPage />} /> */}
                </Route>

            </Routes>
        </>
    )
}
