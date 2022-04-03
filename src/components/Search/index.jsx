import React from 'react'
import "./css/index.scss";

export default function Search() {
  return (
    <div className='header-search'>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-sousuo"></use>
      </svg>
      <input type="text" placeholder='搜索文章' />
    </div>
  )
}
