import Layout from "../components/Layout/Main";
import Landing from "../components/Landing";
import { Navigate, useRoutes } from "react-router-dom";

const ApplicationRouter = () => {
    const routers = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Landing /> },
                { path: "/home", element: <Navigate to={"/"} /> },
            ]
        }
    ])

    return routers;
}

export default ApplicationRouter;