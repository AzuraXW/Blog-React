import { http } from './http'

// 获取文章列表
function fetchArticleList (page, limit) {
  return http.get('/article/list', {
    params: {
      page,
      limit
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

export {
  fetchArticleList,
  visit,
  visitCount
}