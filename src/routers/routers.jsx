import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/Home/Home';
import Movies from '../components/Movies/Movies';
import News from '../components/News/News';
import About from '../components/About/About';
import PageError from '../components/PageError/PageError';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/movies',
        element: <Movies />
    },
    {
        path: '/news',
        element: <News />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '*',
        element: <PageError />
    }
]);

export default router;