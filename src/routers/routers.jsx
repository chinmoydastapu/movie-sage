import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/Home/Home';
import Movies from '../components/Movies/Movies';
import News from '../components/News/News';
import About from '../components/About/About';
import PageError from '../components/PageError/PageError';
import MainLayout from '../layouts/MainLayout';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import GenrePage from '../components/Genres/GenrePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/home/:genreType',
                element: <GenrePage />
            },
            {
                path: '/home/movies',
                element: <Movies />
            },
            {
                path: '/home/news',
                element: <News />
            },
            {
                path: '/home/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <PageError />
    }
]);

export default router;