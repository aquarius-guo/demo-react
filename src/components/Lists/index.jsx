import React from 'react'
import "./css/index.scss";

export default function Lists() {
  return (
    <div className='lists'>
      <h3 className='lists-title'>文章列表</h3>
      <ul>
        <li>队列的实现与应用</li>
        <li>栈的实现与应用</li>
        <li>什么是 XSS 攻击？</li>
        <li>集合的实现与应用</li>
        <li>树的实现</li>
        <li>什么是作用域？</li>
        <li>链表的实现与应用</li>
        <li>变量在作用域链上怎么查找？</li>
        <li>JavaScript 代码的执行流程</li>
        <li>图的遍历</li>
      </ul>
    </div>
  )
}
