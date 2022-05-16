import React from 'react'
import Logo from '../assets/logo.png'
import MLink from '../components/Link'
import IconFont from '../components/IconFont'
import { useNavigate, useLocation } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname
  console.log(location.pathname)
  return (
    <header className="flex justify-between py-8 px-6 items-center">
      <div className="flex items-center">
        <img src={Logo} alt="" className="w-[80px] h-[80px]" />
        <div className="ml-6">
          <div
            className="px-4 py-2 border-2 border-blue-400 rounded outline-none w-[250px]
          cursor-pointer shadow-md shadow-zinc-100 flex justify-between items-center"
            onClick={() => navigate('/search')}>
            <span className="text-gray-500">搜索</span>
            <IconFont
              type="icon-sousuo"
              style={{ fontSize: '20px', color: '#1890ff' }}
            />
          </div>
        </div>
      </div>
      <nav className="grid grid-cols-4 gap-x-8 text-[18px] items-center justify-items-center">
        <MLink to="/" selected={pathname === '/'}>
          首页
        </MLink>
        <MLink to="/tag" selected={pathname === '/tag'}>
          标签
        </MLink>
        <MLink to="/articles" selected={pathname === '/articles'}>
          文章
        </MLink>
        <MLink to="/about" selected={pathname === '/about'}>
          关于
        </MLink>
      </nav>
    </header>
  )
}

export default Header
