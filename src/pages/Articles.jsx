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
  // 排序
  const [sortKey, setSortKey] = useState('create_at') // 排序关键字 create_at or read
  const [sortRule, setSortRule] = useState(1) // 排序规则 1->升序 -1->降序

  // 两个useEffect执行时机？？？
  useEffect(() => {
    async function loadData() {
      setLoading(true)
      // 文章数据
      const result = await fetchArticleList(
        pageParams.page,
        pageParams.limit,
        sortKey,
        sortRule
      )
      setArticles({
        list: result.data,
        count: result.count,
      })
      setLoading(false)
    }
    loadData()
  }, [pageParams, sortKey, sortRule])

  // 页码发生改变
  function pageChange(page) {
    setPageParams({
      ...pageParams,
      page,
    })
  }

  return (
    <div className="md:px-20 px-4 py-2">
      <div className="my-10 grid grid-cols-2 w-full md:w-3/5 md:grid-cols-3 gap-2 md:gap-0">
        <button
          className={`text-gray-400 flex items-center ${
            sortKey === 'create_at' ? 'text-gray-900' : ''
          }`}
          onClick={() => setSortKey('create_at')}>
          <IconFont type="icon-time" className="mr-2" />
          <span className="text-lg">按发布日期排序</span>
        </button>
        <button
          className={`text-gray-400 flex items-center ${
            sortKey === 'read' ? 'text-gray-900' : ''
          }`}
          onClick={() => setSortKey('read')}>
          <IconFont type="icon-paixu" className="mr-2" />
          <span className="text-lg">按阅读量排序</span>
        </button>
        <button
          className="text-gray-900 flex items-center"
          onClick={() => setSortRule(-sortRule)}>
          {sortRule > 0 ? (
            <IconFont type="icon-shengxu" className="mr-2" />
          ) : (
            <IconFont type="icon-jiangxu" className="mr-2" />
          )}
          <span className="text-lg">{sortRule > 0 ? '升序' : '降序'}</span>
        </button>
      </div>
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
      <div className="mt-20 flex justify-center md:justify-end">
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
