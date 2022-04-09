import React from 'react';
import {
  Search,
  Login,
  Category
} from "@/components";
import "./css/index.scss";

export default function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-feiji"></use>
        </svg>
        <h1>Aquarius</h1>
      </div>
      <div className='header-right'>
        <Search />
        <Category />
        <Login />
      </div>
      <div style={{clear: "both"}}></div>
    </div>
  )
}
