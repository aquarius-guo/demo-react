import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/index.scss";
import 'antd/dist/antd.css';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container)

root.render(<App />)