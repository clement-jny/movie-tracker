import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './Home/home';
import { MovieDetail } from './Movies/movieDetail';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <p>Page not found!</p>,
	},
	{
		path: "movie/:id",
		element: <MovieDetail />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);