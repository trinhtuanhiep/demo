import { Route, Routes } from "react-router-dom"

import * as pages from './pages/index'
import Layout from "./pages/Layout"



const publicRoutes = [
    {
        path: '/',
        label: "Home",
        element: <pages.Home />,
        showSideBar: true
    },
    {
        path: '/profile',
        label: "profile",
        element: <pages.profile />,
        showSideBar: true
    },
    {
        path: '/about',
        label: "about",
        element: <pages.about />,
        showSideBar: true
    },
    {
        path: '/SignIn',
        label: "SignIn",
        element: <pages.SignIn />,
        showSideBar: true
    },
    {
        path: '/SignUp',
        label: "SignUp",
        element: <pages.SignUp />,
        showSideBar: true
    }
]






function Router() {
    return (
        <Routes>
            {
                publicRoutes.map((routes, idx) => {
                    const LayoutPage = routes.showSideBar ? Layout : <Flagment />
                    return (
                        <Route
                            key={idx}
                            path={routes.path}
                            element={<LayoutPage>{routes.element}</LayoutPage>}
                        />
                    )
                })
            }
        </Routes>
    )
}

export { publicRoutes }
export default Router