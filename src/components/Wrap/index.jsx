import React from 'react';
import { useRoutes, useLocation } from "react-router-dom";
import routes from "@/pages"
import "./css/index.scss";

export default function Wrap() {
  // 判断路由分配 wrap 的 width 
  const { pathname } = useLocation()
  const isShow = !(pathname !== "/categorys" && pathname !== "/archives")
  return (
    <div className={`wrap ${isShow && "wrap-show"}`} >
      {useRoutes(routes)}
    </div>
  )
}
