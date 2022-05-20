import { data } from 'autoprefixer'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { search } from '../api'
import { List } from 'antd'

function highLightText(text, lightText) {
  const values = text.split(lightText)
  const string = values.join(`<span class="text-red-700">${lightText}</span>`)
  return <span dangerouslySetInnerHTML={{ __html: string }}></span>
}
console.log(highLightText('测试测试测试', '测'))
function Search({ props }) {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const searchKeyword = params.get('keyword')
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(true)
  // 获取搜索结果
  useEffect(() => {
    if (!searchKeyword) {
      setSearchResult([])
      return
    }
    setLoading(true)
    search(searchKeyword).then((res) => {
      setSearchResult(res.data)
      setTimeout(() => {
        setLoading(false)
      }, 400)
    })
  }, [searchKeyword])

  const header = (
    <p className="text-lg m-0">
      搜索 “{searchKeyword}”, 共有 {searchResult.length} 条结果
    </p>
  )
  return (
    <div className="w-3/5 mx-auto">
      <List
        header={header}
        itemLayout="horizontal"
        dataSource={searchResult}
        loading={loading}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Link to={`/article/${item._id}`} className="text-base">
                  {highLightText(item.title, searchKeyword)}
                </Link>
              }
              description={highLightText(
                item.description || '暂无描述',
                searchKeyword
              )}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Search
