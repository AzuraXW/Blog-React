import ArticleCard from '../components/ArticleCard'
import { fetchArticleList } from '../api'
import { useState, useEffect } from 'react'
import { Spin, Pagination } from 'antd'
import IconFont from '../components/IconFont'

function Articles() {
  const [articles, setArticles] = useState({
    list: [],
    count: 0,
  })
  const [pageParams, setPageParams] = useState({
    page: 1,
    limit: 6,
  })
  // 控制加载状态
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function loadData() {
      setLoading(true)
      // 文章数据
      const result = await fetchArticleList(pageParams.page, pageParams.limit)
      console.log(result.count)
      setArticles({
        list: result.data,
        count: result.count,
      })
      setLoading(false)
    }
    loadData()
  }, [pageParams])

  // 页码发生改变
  function pageChange(page) {
    setPageParams({
      ...pageParams,
      page,
    })
  }

  return (
    <div className="md:px-20 px-4 py-2">
      <div className="my-10"></div>
      <Spin spinning={loading} size="large">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 min-h-[400px]">
          {articles.list.map((item) => (
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
      <div className="mt-20 flex justify-end">
        <Pagination
          current={pageParams.page}
          total={articles.count}
          pageSize={6}
          onChange={pageChange}
        />
      </div>
    </div>
  )
}

export default Articles
