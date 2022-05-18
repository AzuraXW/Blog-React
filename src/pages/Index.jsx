import React from 'react'
import ArticleCard from '../components/ArticleCard'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { fetchArticleList } from '../api'
import { useState, useEffect } from 'react'
import { Spin } from 'antd'
import IconFont from '../components/IconFont'

function Index() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    async function loadData() {
      const articles = await fetchArticleList(1, 6)
      setArticles(articles.data)
    }
    setTimeout(() => {
      loadData()
    }, 1000)
  }, [])

  return (
    <main className="container mx-auto relative overflow-hidden">
      <div className="flex justify-end md:px-20 px-4">
        <Link
          to="/articles"
          className="text-lg text-gray-400 flex items-center">
          <span>更多文章</span>
          <IconFont type="icon-youjiantou" />
        </Link>
      </div>
      <Spin spinning={articles.length === 0} size="large">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:px-20 p-4 pt-4 min-h-[400px]">
          {articles.map((item) => (
            <ArticleCard
              key={item._id}
              id={item._id}
              title={item.title}
              description={item.description}
              read={item.read}
              date={item.create_at}
            />
          ))}
        </div>
      </Spin>
    </main>
  )
}

export default Index
