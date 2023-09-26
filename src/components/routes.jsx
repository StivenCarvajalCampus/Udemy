import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from './dashboard';
import { App } from './login/App.jsx';

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/dashboard",
        element: <Dashboard/>
    }
])
export default router;