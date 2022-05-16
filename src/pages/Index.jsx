import React from 'react'
import ArticleCard from '../components/ArticleCard'
import Circle from '../widgets/Circle'
import { Button } from 'antd'

function Index() {
  return (
    <main className="container mx-auto relative overflow-hidden">
      <div className="flex justify-end px-20">
        <Button type="primary" size="large" ghost href="/articles">
          更多文章
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:px-20 p-4 pt-4">
        {[1, 2, 3, 4, 5, 6].map((v) => (
          <ArticleCard key={v} />
        ))}
      </div>
      <Circle
        className="absolute bottom-0  left-[20%] md:bottom-20 -z-10 animate-spin-slow"
        width="120px"
        height="120px"
      />
      <Circle
        className="absolute right-0 top-10 -z-10 animate-spin-slow"
        width="220px"
        height="220px"
      />
      <Circle
        className="absolute -left-[5%] top-28 -z-10 animate-spin-slow"
        width="180px"
        height="180px"
      />
      <Circle
        className="absolute left-[45%] top-[40%] -z-10 animate-spin-slow"
        width="180px"
        height="180px"
      />
      <Circle
        className="absolute left-[70%] bottom-20 -z-10 animate-spin-slow"
        width="160px"
        height="160px"
      />
    </main>
  )
}

export default Index
