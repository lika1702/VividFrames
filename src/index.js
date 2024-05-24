import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes } from "react-router-dom";
import Services from './Services';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import Main from './Main';

import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

/*
ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
), ...) 
*/

/*const router = createBrowserRouter([
    {basename: process.env.PUBLIC_URL},
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/services",
        element: <Services />,
    },
    {
        path: "/portfolio",
        element: <Portfolio />,
    },
    {
        path: "/contacts",
        element: <Contacts />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);*/
/*console.log(process.env.PUBLIC_URL);
ReactDOM.render((
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contacts' element={<Contacts />} />
        </Routes>
    </HashRouter>
), document.getElementById('root'));*/




export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path='/services'>
                <Services />
            </Route>
            <Route path='/portfolio'>
                <Portfolio />
            </Route>
            <Route path='/contacts'>
                <Contacts />
            </Route>
        </Routes>
    </BrowserRouter>

);

/*ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);*/

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);