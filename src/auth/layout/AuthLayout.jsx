import { Outlet } from "react-router-dom"
import { Nav } from "../../public/components"
import { Footer } from "../../public/components/Footer"



export const AuthLayout = () => {
    return (
        <>
            <header style={{ minHeight: '75px' }}>
                <Nav />
            </header>

            <main style={{ minHeight: '90vh' }}>
                <Outlet />
            </main>

            <Footer />

        </>
    )
}
