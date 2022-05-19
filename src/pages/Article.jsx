import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { articleDetail, read } from '../api'
import { format } from '../utils'
import { Tag } from 'antd'
import '../styles/markdown.scss'
import { useRef } from 'react'
import { getScrollTop } from '../utils'

function Article() {
  const { id } = useParams()
  const [article, setArticle] = useState({})
  useEffect(() => {
    articleDetail(id).then((res) => {
      setArticle(res.data)
      read(id)
    })
  }, [])

  const markdownRef = useRef({})
  const [titleList, setTitleList] = useState([])
  useEffect(() => {
    // 提取文章内部标题，生成目录导航
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

  const contentRef = useRef(null) // 目录dom
  const articleRef = useRef(null) // 文章区域dom
  useEffect(() => {
    // 目录距离屏幕的位置
    const position = contentRef.current.getBoundingClientRect()
    function hlander() {
      // 获取滚动高度
      const scrollTop = getScrollTop()
      // 滚动高度+目录本身的高度
      const height = scrollTop - position.y + contentRef.current.offsetHeight
      // 滚动高度大于目录的原始定位，设置绝对定位
      if (scrollTop >= position.top) {
        contentRef.current.style = `position: fixed; top:0;`
      } else {
        contentRef.current.style = ''
      }
      if (height >= articleRef.current.offsetHeight) {
        // 防止滚动出底部
        contentRef.current.style = `position: absolute; bottom:0`
      }
    }
    window.addEventListener('scroll', hlander)

    // 清除副作用
    return () => {
      window.removeEventListener('scroll', hlander)
    }
  }, [])

  return (
    <div className="w-full md:w-4/5 mx-auto px-10 flex relative">
      <div className="flex-1" ref={articleRef}>
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
      <div className="w-[210px] ml-10">
        <div ref={contentRef} className="w-[210px]">
          <p className="my-5 text-lg border-b py-4">目录</p>
          <ul className="text-base">
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
    </div>
  )
}

export default Article
