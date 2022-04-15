import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Wrap,
  Lists,
  Describe
} from "@/components";
import "./css/index.scss"

export default function Content() {
  const { pathname } = useLocation()
  return (
    <div className='content'>
      <Wrap />
      <Describe />
      {
        (pathname !== "/categorys" && pathname !== "/archives") && <Lists />
      }
    </div>
  )
}
