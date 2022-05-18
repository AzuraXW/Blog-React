import { http } from './http'

// 获取文章列表
function fetchArticleList (page, limit, sortKey, sortRule) {
  return http.get('/article/list', {
    params: {
      page,
      limit,
      sort_key: sortKey,
      sort_rule: sortRule
    }
  })
}

// 记录访问数
function visit () {
  return http.post('/visit')
}

// 网站总访问数
function visitCount () {
  return http.get('/visit/count')
}

// 获取文章详情
function articleDetail (id) {
  return http.get(`/article/detail/${id}`)
}

export {
  fetchArticleList,
  visit,
  visitCount,
  articleDetail
}