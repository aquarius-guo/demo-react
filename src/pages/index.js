import React from "react";
import { Navigate } from "react-router-dom"
import useSuspense from "./HOC";
const Lists = React.lazy(() => import('./Lists'));
const Article = React.lazy(() => import('./Article'));

export default [
    {
        path: "/",
        element: useSuspense(Lists)
    },
    {
        path: "/articles",
        element: useSuspense(Article)
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
]

