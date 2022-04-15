import React from "react";
import {
  NavLink,
} from "react-router-dom";
import routes from "@/utils/categoryRoutes"
import "./css/index.scss";

function Category() {
  return (
    <div className="header-category">
      <ul>
        {routes.map(item => {
          return (
            <NavLink key={item.to} to={`${item.to}`} style={({isActive}) => {
              return {
                color: isActive ? '#1890ff' : 'black',
                borderBottom: isActive ? '2px solid #1890ff' : '2px solid transparent',
              }
            }}>
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default Category