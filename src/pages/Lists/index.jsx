import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tag, Pagination } from "antd";
import { getList } from '@/api/article';
import TagList from '@/utils/tagColor';
import "./css/index.scss";

export default function Lists() {
  // 文章列表
  const [article, setArticle] = useState([]);
  // 当前页数
  const [current, setCurrent] = useState(1);
  // 总数
  const [countNumber, setCountNumber] = useState(1);
  const navigator = useNavigate();
  // 获取文章
  useEffect(() => {
    async function getArticlesList() {
      const { data: { articleList, count } } = await getList({ pageSize: 4, pageIndex: current });
      setArticle(articleList);
      setCountNumber(count);
    };
    getArticlesList();
  }, [current]);
  // 跳转到指定的文章
  const handleNavigator = (id) => {
    navigator(`article?id=${id}`);
  }
  // 改变页数
  const handleChange = (v) => {
    setCurrent(v);
  }

  return (
    <div className='pages-lists'>
      {
        article.length > 0 && (
          <ul>
            {
              // 当有数据时
              article.map((v, i) => {
                return (
                  <li className='pages-lists-article' key={i}>
                    <div className='pages-lists-title'>
                      <h1 onClick={handleNavigator.bind(this, v.id)}>{v.title}</h1>
                      <span>{v.createdAt}</span>
                    </div>
                    <div className='pages-lists-desc' dangerouslySetInnerHTML={{ __html: v.editorValue }}></div>
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
                        {v.watchNum}
                      </span>
                      {
                        v.optionsTag.map((v, i) => {
                          const color = Math.floor(Math.random() * TagList.length);
                          return <Tag color={TagList[color]} key={i}>{v}</Tag>
                        })
                      }
                    </div>
                  </li>
                )
              })
            }
          </ul>
        )
      }
      {article.length !== 0 && <Pagination current={current} onChange={handleChange} pageSize={4} total={countNumber} />}
    </div>
  )
}
