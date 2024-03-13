import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { PublicRoutes } from '../public/routes/PublicRoutes';
import { ErrorPage } from '../public/pages/ErrorPage';
import { DashboardRoutes } from '../dashboard/routes/DashboardRoutes';

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

    useEffect(() => {
        checkAuthToken();
    }, [])



    if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }


    return (
        <Routes>
            {/* <Route path="/" element={<PublicRoutes />} /> */}
            {
                (status === 'authenticated')
                    ? (
                        <>
                            <Route path="/dashboard" element={<DashboardRoutes />} />
                            <Route path="/dashboard/*" element={<DashboardRoutes />} />
                            <Route path="/auth/*" element={<Navigate to="/dashboard" />} />
                        </>
                    )
                    : (
                        <>
                            <Route path="/auth" element={<AuthRoutes />} />
                            <Route path="/auth/*" element={<AuthRoutes />} />
                            <Route path="/dashboard/*" element={<Navigate to="/auth" />} />
                        </>
                    )
            }

            <Route path="/*" element={<PublicRoutes />} />

        </Routes>
    )
}
