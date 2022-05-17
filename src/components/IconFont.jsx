import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_3403014_3so2ko4komi.js'],
  extraCommonProps: {
    style: {
      fontSize: '30px',
    },
  },
})

export default IconFont
