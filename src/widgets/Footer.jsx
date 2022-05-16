import React from 'react'
import IconFont from '../components/IconFont'

function Footer() {
  return (
    <div className="my-10 border-t-2 border-blue-500 md:m-20 m-12 md:py-10 py-8 flex justify-between items-center flex-col md:flex-row">
      <p className="text-gray-500 text-lg my-4 md:m-0">
        Copyright © 2022 WangWei. All rights reserved.
      </p>
      <div>
        <IconFont
          type="icon-github"
          className="mr-10 text-lg"
          style={{ fontSize: '40px' }}
        />
        <IconFont type="icon-juejin" style={{ fontSize: '40px' }} />
      </div>
    </div>
  )
}

export default Footer
