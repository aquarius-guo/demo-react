import React from 'react';
import { Tag } from "antd";
import "./css/index.scss";

const arrTag = [
  {
    value: "Mysql",
    color: "magenta",
  }, {
    value: "this",
    color: "red",
  }, {
    value: "作用域",
    color: "volcano"
  }, {
    value: "Javascript",
    color: "orange"
  }, {
    value: "React",
    color: "gold"
  }, {
    value: "CSS",
    color: "lime"
  }, {
    value: "浏览器安全",
    color: "green"
  }, {
    value: "HTTP",
    color: "cyan"
  }, {
    value: "COOKIE",
    color: "blue",
  }, {
    value: "闭包",
    color: "geekblue"
  }, {
    value: "变量提升",
    color: "purple"
  }, {
    value: "Promise",
    color: "magenta"
  }, {
    value: "EventLoop",
    color: "red"
  }, {
    value: "跨域",
    color: "volcano"
  }
]

export default function Describe() {
  const handleForEachTag = () => {
    return arrTag.map((item, index) => {
      return (
        <Tag color={item.color} key={index}>
          <a href={`/tag/${item.value}`}>{item.value}</a>
        </Tag>
      )
    })
  }
  return (
    <div className='describe'>
      <div className='describe-avatar'>
        <img
          src={require("@/assets/imgs/avatar.jpg")}
          alt="avatar"
          title='avatar'
        />
        <h2>Dream</h2>
        <p>React & Design</p>
        <p>
          <a href='https://github.com/aquarius-guo/demo-react'>
            <svg className="icon login-icon" aria-hidden="true">
              <use xlinkHref="#icon-github-fill"></use>
            </svg>
            github
          </a>
        </p>
      </div>
      <div className='hr-tag'>
        <span>标签</span>
      </div>
      <div className='describe-tag'>
        {handleForEachTag()}
      </div>
      <div className='hr-tag'>
        <span>友链</span>
      </div>
      <div className='describe-friend-links'>
        <div>假如我有一个友链</div>
        <div>假如我有两个友链</div>
      </div>
    </div>
  )
}
