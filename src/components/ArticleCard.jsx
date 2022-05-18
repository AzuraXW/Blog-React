import IconFont from './IconFont'
import { format } from '../utils'
import { useNavigate } from 'react-router-dom'

function ArticleCard({ id, title, description, read, date }) {
  const navigate = useNavigate()

  return (
    <div className="px-6 py-4 rounded-lg bg-gradient-to-tl  shadow-lg">
      <h2 className="text-[26px] mb-5 mt-0 truncate">{title}</h2>
      <p className="text-zinc-600 min-h-[40px] max-h-[100px] text-ellipsis overflow-hidden">
        {description}
      </p>
      <div className="my-6 flex items-center ">
        <div className="mr-6 flex items-center">
          <IconFont type="icon-calendar-full" />
          <span className="inline-block ml-2 text-zinc-400">
            {format(date)}
          </span>
        </div>
        <div className="mr-6 flex items-center">
          <IconFont type="icon-dianzan" />
          <span className="inline-block ml-2 text-zinc-400">99+</span>
        </div>
        <div className="mr-6 flex items-center">
          <IconFont type="icon-yuedu" />
          <span className="inline-block ml-2 text-zinc-400">{read}</span>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 rounded shadow-lg transition-all
        hover:shadow-none bg-blue-400 text-white
        bg-gradient-to-br from-cyan-300 text-[18px]
        flex items-center"
          onClick={() => navigate(`/article/${id}`)}>
          立即阅读
        </button>
      </div>
    </div>
  )
}

export default ArticleCard
