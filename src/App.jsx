import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Header, Content } from "./components";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  )
}
