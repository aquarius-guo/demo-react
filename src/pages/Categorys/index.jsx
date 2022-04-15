import React, { useState } from 'react';
import { Tag, Pagination } from "antd";
import "./css/index.scss"

export default function Categorys() {
  const [current, setCurrent] = useState(1);
  const handleChange = (page) => {
    setCurrent(page)
  }
  return (
    <div className='pages-categorys'>
      <div className='categorys-tags'>
        <Tag color="#108ee9">全部</Tag>
        <Tag color="magenta">JavaScript</Tag>
        <Tag color="cyan">算法与数据结构</Tag>
        <Tag color="blue">浏览器</Tag>
        <Tag color="geekblue">MySQL</Tag>
        <Tag color="purple">Koa</Tag>
      </div>
      <ul className='categorys-lists'>
        <li>
          <h3>队列的实现与应用</h3>
          <div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-rili"></use>
              </svg>
              <span>日期</span>
            </div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-tag-fill"></use>
              </svg>
              <Tag color="geekblue">MySQL</Tag>
              <Tag color="purple">Koa</Tag>
            </div>
          </div>
        </li>
        <li>
          <h3>队列的实现与应用</h3>
          <div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-rili"></use>
              </svg>
              <span>日期</span>
            </div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-tag-fill"></use>
              </svg>
              <Tag color="geekblue">MySQL</Tag>
              <Tag color="purple">Koa</Tag>
            </div>
          </div>
        </li>
        <li>
          <h3>队列的实现与应用</h3>
          <div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-rili"></use>
              </svg>
              <span>日期</span>
            </div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-tag-fill"></use>
              </svg>
              <Tag color="geekblue">MySQL</Tag>
              <Tag color="purple">Koa</Tag>
            </div>
          </div>
        </li>
        <li>
          <h3>队列的实现与应用</h3>
          <div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-rili"></use>
              </svg>
              <span>日期</span>
            </div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-tag-fill"></use>
              </svg>
              <Tag color="geekblue">MySQL</Tag>
              <Tag color="purple">Koa</Tag>
            </div>
          </div>
        </li>
        <li>
          <h3>队列的实现与应用</h3>
          <div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-rili"></use>
              </svg>
              <span>日期</span>
            </div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-tag-fill"></use>
              </svg>
              <Tag color="geekblue">MySQL</Tag>
              <Tag color="purple">Koa</Tag>
            </div>
          </div>
        </li>
        <li>
          <h3>队列的实现与应用</h3>
          <div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-rili"></use>
              </svg>
              <span>日期</span>
            </div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-tag-fill"></use>
              </svg>
              <Tag color="geekblue">MySQL</Tag>
              <Tag color="purple">Koa</Tag>
            </div>
          </div>
        </li>
        <li>
          <h3>队列的实现与应用</h3>
          <div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-rili"></use>
              </svg>
              <span>日期</span>
            </div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-tag-fill"></use>
              </svg>
              <Tag color="geekblue">MySQL</Tag>
              <Tag color="purple">Koa</Tag>
            </div>
          </div>
        </li>
        <li>
          <h3>队列的实现与应用</h3>
          <div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-rili"></use>
              </svg>
              <span>日期</span>
            </div>
            <div>
              <svg className="icon login-icon" aria-hidden="true">
                <use xlinkHref="#icon-tag-fill"></use>
              </svg>
              <Tag color="geekblue">MySQL</Tag>
              <Tag color="purple">Koa</Tag>
            </div>
          </div>
        </li>
      </ul>
      <Pagination current={current} onChange={handleChange} pageSize={8} total={40} />;
    </div>
  )
}
