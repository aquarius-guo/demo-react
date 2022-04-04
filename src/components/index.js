import React from "react";
import Search from "./Search";
import Login from "./Login";
import Category from "./Category";
import Header from "./Header";
import Content from "./Content";
import Describe from "./Describe";
import Lists from "./Lists";
const Wrap = React.lazy(() => import("./Wrap"));

export {
    Search,
    Login,
    Category,
    Header,
    Content,
    Describe,
    Lists,
    Wrap
}