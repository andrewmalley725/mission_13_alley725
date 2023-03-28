import React from "react";
import DisplayMovies from "./DisplayMovies";
import NavBar from "./Navbar";
import Home from "./Home";
import Podcasts from "./Podcasts";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import data from "../data/MovieData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/movies",
        element: <DisplayMovies data={data.MovieData}/>,
    },
    {
        path: "/podcasts",
        element: <Podcasts/>,
    },
]);


export default function App()
{
    return(
        <div>
            <NavBar/>
            <RouterProvider router={router} />
        </div>
    )
}