import IconFont from './IconFont'

function ArticleCard() {
  return (
    <div className="px-6 py-4 rounded-lg bg-gradient-to-tl from-emerald-50 shadow-lg shadow-blue-50">
      <h2 className="text-[26px] mb-5 mt-0 truncate">
        文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题
      </h2>
      <p className="text-zinc-400 min-h-[40px] max-h-[100px] text-ellipsis overflow-hidden">
        摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要
        摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要
      </p>
      <div className="my-6 flex items-center ">
        <div className="mr-6 flex items-center">
          <IconFont type="icon-calendar-full" />
          <span className="inline-block ml-2 text-rose-500">2022年5月16日</span>
        </div>
        <div className="mr-6 flex items-center">
          <IconFont type="icon-dianzan" />
          <span className="inline-block ml-2 text-rose-500">99+</span>
        </div>
        <div className="mr-6 flex items-center">
          <IconFont type="icon-yuedu" />
          <span className="inline-block ml-2 text-rose-500">99+</span>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 rounded shadow-lg transition-all
        hover:shadow-none bg-blue-400 text-white
        bg-gradient-to-br from-cyan-300 text-[18px]
        flex items-center">
          立即阅读
        </button>
      </div>
    </div>
  )
}

export default ArticleCard
