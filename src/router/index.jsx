import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import App from "../App";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <App/>
            },
            {
                path: 'projects/:slug',
                element: <ProjectDetails/>
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ]
    }
])

export default router;