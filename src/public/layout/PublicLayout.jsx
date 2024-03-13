import { Outlet } from "react-router-dom"
import { Nav } from "../components"
import { Footer } from "../components/Footer"


export const PublicLayout = () => {
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
