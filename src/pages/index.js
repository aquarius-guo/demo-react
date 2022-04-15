import React from "react";
import { Navigate } from "react-router-dom"
import useSuspense from "./HOC";
const Lists = React.lazy(() => import('./Lists'));
const Article = React.lazy(() => import('./Article'));
const Archives = React.lazy(() => import('./Archives'));
const Categorys = React.lazy(() => import('./Categorys'));
const About = React.lazy(() => import('./About'));

export default [
	{
 		path: "/",
		element: useSuspense(Lists)
	},
	{
		path: "/archives",
		element: useSuspense(Archives)
	},
	{
		path: "/categorys",
		element: useSuspense(Categorys)
	},
	{
		path: "/about",
		element: useSuspense(About)
	},
	{
		path: "/article",
		element: useSuspense(Article),
	},
	{
		path: "*",
		element: <Navigate to="/" />
	}
]

