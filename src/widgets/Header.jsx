import React, { useRef } from 'react'
import Logo from '../assets/logo.png'
import MLink from '../components/Link'
import IconFont from '../components/IconFont'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname
  const [menuShow, setMenuShow] = useState(false)

  // 控制菜单显示状态
  function changeMenuStatus() {
    setMenuShow(!menuShow)
  }

  // 路径变化收起菜单，首次加载不生效
  let firstLoad = useRef(true)
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false
    } else {
      changeMenuStatus()
    }
  }, [pathname])

  return (
    <header className="flex justify-between py-8 px-6 md:items-center flex-col md:flex-row items-stretch overflow-hidden">
      <div className="flex items-center justify-between">
        <img
          src={Logo}
          alt=""
          className="w-[60px] h-[60px] md:h-[80px] md:w-[80px]"
        />
        <div className="block md:hidden" onClick={changeMenuStatus}>
          <IconFont
            type="icon-caidan"
            style={{ fontSize: '45px', color: '#1890ff' }}
          />
        </div>

        <div className="ml-6 hidden md:block">
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
      <div
        className={`overflow-hidden transition-[right] fixed
      md:static right-0 top-0 w-[250px] md:w-auto p-4 md:p-0 z-10
      h-[100vh] md:h-auto bg-gray-600 md:bg-transparent ${
        menuShow ? 'right-0' : '-right-[250px]'
      }
      `}>
        <span className=" block md:hidden">
          <IconFont
            type="icon-guanbi"
            className="text-lg"
            onClick={changeMenuStatus}
          />
        </span>

        <nav
          className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-2 text-[18px]
      items-center justify-items-center rounded border-blue-200 mt-14 md:mt-0">
          <MLink
            to="/"
            selected={pathname === '/'}
            className="w-full md:w-auto">
            首页
          </MLink>
          <MLink
            to="/tag"
            selected={pathname === '/tag'}
            className="w-full md:w-auto">
            标签
          </MLink>
          <MLink
            to="/articles"
            selected={pathname === '/articles'}
            className="w-full md:w-auto">
            文章
          </MLink>
          <MLink
            to="/about"
            selected={pathname === '/about'}
            className="w-full md:w-auto">
            关于
          </MLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
