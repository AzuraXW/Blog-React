import { Link } from 'react-router-dom'

function MLink({ to, selected = '', children }) {
  let className = 'px-6 py-2 rounded bg-gradient-to-r'
  className += selected
    ? ' shadow-md bg-blue-500 text-white hover:text-white from-green-400 to-blue-500'
    : ' hover:bg-blue-300 hover:text-zinc-100 text-gray-700 hover:from-green-200 hover:to-blue-300'
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default MLink
