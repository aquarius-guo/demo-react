import React from 'react';
import { useRoutes } from "react-router-dom";
import routes from "@/pages"
import "./css/index.scss";

export default function Wrap() {
  return (
    <div className='wrap'>
      {useRoutes(routes)}
    </div>
  )
}
