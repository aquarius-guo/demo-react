import React from 'react';
import { Layout } from "antd";
import {
  Wrap,
  Lists,
  Describe
} from "@/components";
import "./css/index.scss"

export default function Content() {
  return (
    <div className='content'>
      <Wrap />
      <Describe />
      <Lists />
    </div>
  )
}
