import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import { message, Tag } from 'antd';
import "./css/index.scss";
import { getListById } from '@/api/article';
import TagList from '@/utils/tagColor';
import { addWatch } from '../../api/article';

const initiaState = { id: "", title: "", editorValue: "", createdAt: "", optionsTag: [], watchNum: 0 }
export default function Article() {
  const [articleContent, setArticleContent] = useState(initiaState);
  const [search, _] = useSearchParams();
  const navigate = useNavigate();
  let id = search.get("id");

  // 根据 id 获取文章
  useEffect(() => {
    (async function () {
      id = id * 1
      if (!id) {
        navigate("/article?id=1", { replace: true });
        return;
      }
      const { errno, data, message: msg } = await getListById(id);
      if (errno !== 0) {
        message.error(msg);
        navigate("/article?id=1", { replace: true });
        return;
      }
      setArticleContent(data);
    })();
  }, [id]);

  // 增加观看数量
  useEffect(() => {
    if (id) {
      addWatch(id);
    }
  }, []);

  return (
    <div>
      {
        articleContent.title && (
          <>
            <h1 className='article-title'>{articleContent.title}</h1>
            <div className='article-desc'>
              <span>时间: {articleContent.createdAt}</span>
              {
                articleContent.optionsTag.length && (
                  articleContent.optionsTag.map((v, index) => {
                    const len = articleContent.optionsTag.length;
                    const i = Math.floor(Math.random() * len);
                    return <Tag color={TagList[i]} key={index}>{v}</Tag>
                  })
                )
              }
              <span className='icon-tag'>
                <svg className="icon login-icon eye" aria-hidden="true">
                  <use xlinkHref="#icon-eye"></use>
                </svg>
                {articleContent.watchNum}
              </span>
            </div>
            <div className='pages-lists-desc' dangerouslySetInnerHTML={{ __html: articleContent.editorValue }}></div>
          </>
        )
      }

    </div>
  )
}
