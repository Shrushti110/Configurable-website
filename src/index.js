import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css"
import Home from './views/Home/home';
import About from './views/About/about';
import { THEME } from './config/data';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
    {
        path: '/',
        element:<Home/>
    },
    {
        path: '/about',
        element: <About/>
    }
]);


root.render(<div style={{background: THEME.main}}>
    <RouterProvider router={router}/>
    </div>);