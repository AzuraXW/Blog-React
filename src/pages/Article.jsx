import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { articleDetail } from '../api'
import { format } from '../utils'
import { Tag } from 'antd'
import '../styles/markdown.scss'
import { useRef } from 'react'

function Article() {
  const { id } = useParams()
  const [article, setArticle] = useState({})
  useEffect(() => {
    articleDetail(id).then((res) => {
      setArticle(res.data)
    })
  }, [])

  const markdownRef = useRef({})
  const [titleList, setTitleList] = useState([])
  useEffect(() => {
    setTimeout(() => {
      const list = []
      Array.from(markdownRef.current.childNodes).forEach((dom, index) => {
        if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(dom.tagName)) {
          const id = 'header-' + index
          dom.setAttribute('id', id)
          list.push({
            id: id,
            name: dom.innerText,
            level: parseInt(dom.nodeName.substring(1, 2)),
            nodeName: dom.nodeName,
          })
        }
      })
      setTitleList(list)
    }, 100)
  }, [])
  return (
    <div className="w-full md:w-4/5 mx-auto px-10 flex">
      <div className="flex-1">
        <h1 className="text-4xl text-center mt-0 mb-10">{article.title}</h1>
        <div className="text-base text-gray-400 grid grid-cols-1 gap-y-2">
          <div>
            <span className="inline-block mr-5">
              创建于: {format(article.create_at)}
            </span>
            <span>最后一次更新于: {format(article.update_at)}</span>
          </div>
          <div>
            <span>作者：{article.author && article.author.username}</span>
          </div>
          <div>
            标签：<Tag color="lime">{article.tag && article.tag.name}</Tag>
          </div>
        </div>
        <div className="mt-5">
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="markdown-body"
            ref={markdownRef}></div>
        </div>
      </div>
      <div
        className="w-[210px] ml-10"
        style={{ position: 'sticky', top: '20px' }}>
        <p className="my-5 text-lg border-b py-4">目录</p>
        <ul className=" text-base">
          {titleList.map((title) => (
            <li
              style={{ marginLeft: (title.level - 2) * 15 + 'px' }}
              key={title.id}>
              <a
                href={'#' + title.id}
                className="block px-3 py-2 rounded hover:bg-gray-100">
                {title.name}
              </a>
            </li>
          ))}
          <li className="ml-2">END</li>
        </ul>
      </div>
    </div>
  )
}

export default Article
