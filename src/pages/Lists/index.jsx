import React from 'react';
import { Tag } from "antd";
import "./css/index.scss";

export default function Lists() {
  return (
    <div className='pages-lists'>
      <ul>
        <li className='pages-lists-article'>
          <div className='pages-lists-title'>
            <span>
              <a href="/" >什么是 XSS 攻击？</a>
              <span>2022-02-23</span>
            </span>
          </div>
          <div className='pages-lists-desc'>
            <h2>什么是 XSS</h2>
            <p>
              <Tag color="error">XSS</Tag>
              也称跨站脚本攻击，简单的来说就是当一个目标的站点被我们用户去访问，在渲染 HTML 这个过程中呢，出现了一些没有预期到的脚本指令，然后呢就会执行，这个时候呢，就产生了一个 XSS 的攻击。</p>
            <p><Tag color="error">XSS</Tag>
              攻击就是在用户访问这个页面的时候，插入一些自己的脚本。脚本让用户在访问这个页面的时候就可以执行这个脚本，攻击者通过插入的脚本执行呢，去获得用户的一些信息，比如说 cookie 发送到攻击者自己的网站，这就是跨站。</p>
          </div>
          <div className='pages-lists-tag'>
            <span className='icon-tag'>
              <svg className="icon login-icon pinglun" aria-hidden="true">
                <use xlinkHref="#icon-pinglun"></use>
              </svg>
              0
            </span>
            <span className='icon-tag'>
              <svg className="icon login-icon eye" aria-hidden="true">
                <use xlinkHref="#icon-eye"></use>
              </svg>
              0
            </span>
            <Tag color="success">浏览器</Tag>
            <Tag color="processing">浏览器安全</Tag>
            <Tag color="error">XSS</Tag>
          </div>
        </li>
        <li className='pages-lists-article'>
          <div className='pages-lists-title'>
            <span>
              <a href="/" >什么是 XSS 攻击？</a>
              <span>2022-02-23</span>
            </span>
          </div>
          <div className='pages-lists-desc'>
            <h2>什么是 XSS</h2>
            <p>
              <Tag color="error">XSS</Tag>
              也称跨站脚本攻击，简单的来说就是当一个目标的站点被我们用户去访问，在渲染 HTML 这个过程中呢，出现了一些没有预期到的脚本指令，然后呢就会执行，这个时候呢，就产生了一个 XSS 的攻击。</p>
            <p><Tag color="error">XSS</Tag>
              攻击就是在用户访问这个页面的时候，插入一些自己的脚本。脚本让用户在访问这个页面的时候就可以执行这个脚本，攻击者通过插入的脚本执行呢，去获得用户的一些信息，比如说 cookie 发送到攻击者自己的网站，这就是跨站。</p>
          </div>
          <div className='pages-lists-tag'>
            <span className='icon-tag'>
              <svg className="icon login-icon pinglun" aria-hidden="true">
                <use xlinkHref="#icon-pinglun"></use>
              </svg>
              0
            </span>
            <span className='icon-tag'>
              <svg className="icon login-icon eye" aria-hidden="true">
                <use xlinkHref="#icon-eye"></use>
              </svg>
              0
            </span>
            <Tag color="success">浏览器</Tag>
            <Tag color="processing">浏览器安全</Tag>
            <Tag color="error">XSS</Tag>
          </div>
        </li>
        <li className='pages-lists-article'>
          <div className='pages-lists-title'>
            <span>
              <a href="/" >什么是 XSS 攻击？</a>
              <span>2022-02-23</span>
            </span>
          </div>
          <div className='pages-lists-desc'>
            <h2>什么是 XSS</h2>
            <p>
              <Tag color="error">XSS</Tag>
              也称跨站脚本攻击，简单的来说就是当一个目标的站点被我们用户去访问，在渲染 HTML 这个过程中呢，出现了一些没有预期到的脚本指令，然后呢就会执行，这个时候呢，就产生了一个 XSS 的攻击。</p>
            <p><Tag color="error">XSS</Tag>
              攻击就是在用户访问这个页面的时候，插入一些自己的脚本。脚本让用户在访问这个页面的时候就可以执行这个脚本，攻击者通过插入的脚本执行呢，去获得用户的一些信息，比如说 cookie 发送到攻击者自己的网站，这就是跨站。</p>
          </div>
          <div className='pages-lists-tag'>
            <span className='icon-tag'>
              <svg className="icon login-icon pinglun" aria-hidden="true">
                <use xlinkHref="#icon-pinglun"></use>
              </svg>
              0
            </span>
            <span className='icon-tag'>
              <svg className="icon login-icon eye" aria-hidden="true">
                <use xlinkHref="#icon-eye"></use>
              </svg>
              0
            </span>
            <Tag color="success">浏览器</Tag>
            <Tag color="processing">浏览器安全</Tag>
            <Tag color="error">XSS</Tag>
          </div>
        </li>
        <li className='pages-lists-article'>
          <div className='pages-lists-title'>
            <span>
              <a href="/" >什么是 XSS 攻击？</a>
              <span>2022-02-23</span>
            </span>
          </div>
          <div className='pages-lists-desc'>
            <h2>什么是 XSS</h2>
            <p>
              <Tag color="error">XSS</Tag>
              也称跨站脚本攻击，简单的来说就是当一个目标的站点被我们用户去访问，在渲染 HTML 这个过程中呢，出现了一些没有预期到的脚本指令，然后呢就会执行，这个时候呢，就产生了一个 XSS 的攻击。</p>
            <p><Tag color="error">XSS</Tag>
              攻击就是在用户访问这个页面的时候，插入一些自己的脚本。脚本让用户在访问这个页面的时候就可以执行这个脚本，攻击者通过插入的脚本执行呢，去获得用户的一些信息，比如说 cookie 发送到攻击者自己的网站，这就是跨站。</p>
          </div>
          <div className='pages-lists-tag'>
            <span className='icon-tag'>
              <svg className="icon login-icon pinglun" aria-hidden="true">
                <use xlinkHref="#icon-pinglun"></use>
              </svg>
              0
            </span>
            <span className='icon-tag'>
              <svg className="icon login-icon eye" aria-hidden="true">
                <use xlinkHref="#icon-eye"></use>
              </svg>
              0
            </span>
            <Tag color="success">浏览器</Tag>
            <Tag color="processing">浏览器安全</Tag>
            <Tag color="error">XSS</Tag>
          </div>
        </li>
        <li className='pages-lists-article'>
          <div className='pages-lists-title'>
            <span>
              <a href="/" >什么是 XSS 攻击？</a>
              <span>2022-02-23</span>
            </span>
          </div>
          <div className='pages-lists-desc'>
            <h2>什么是 XSS</h2>
            <p>
              <Tag color="error">XSS</Tag>
              也称跨站脚本攻击，简单的来说就是当一个目标的站点被我们用户去访问，在渲染 HTML 这个过程中呢，出现了一些没有预期到的脚本指令，然后呢就会执行，这个时候呢，就产生了一个 XSS 的攻击。</p>
            <p><Tag color="error">XSS</Tag>
              攻击就是在用户访问这个页面的时候，插入一些自己的脚本。脚本让用户在访问这个页面的时候就可以执行这个脚本，攻击者通过插入的脚本执行呢，去获得用户的一些信息，比如说 cookie 发送到攻击者自己的网站，这就是跨站。</p>
          </div>
          <div className='pages-lists-tag'>
            <span className='icon-tag'>
              <svg className="icon login-icon pinglun" aria-hidden="true">
                <use xlinkHref="#icon-pinglun"></use>
              </svg>
              0
            </span>
            <span className='icon-tag'>
              <svg className="icon login-icon eye" aria-hidden="true">
                <use xlinkHref="#icon-eye"></use>
              </svg>
              0
            </span>
            <Tag color="success">浏览器</Tag>
            <Tag color="processing">浏览器安全</Tag>
            <Tag color="error">XSS</Tag>
          </div>
        </li>
      </ul>
    </div>
  )
}
