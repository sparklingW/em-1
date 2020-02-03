import React from 'react'
import { connect } from 'react-redux'
import ReactHamburger from 'react-hamburger-menu'
import { useSelector, useDispatch } from 'react-redux'
import { isMobile } from '../browser'

import {
  getSetting,
} from '../util.js'

const HamburgerMenu = ({ dark }) => {

  const showSidebar = useSelector(state => state.showSidebar)
  const dispatch = useDispatch()

  return (
    <div className='hamburger-menu' style={{ padding: isMobile ? '5%' : '2% 3%', width: '20px' }}>
      <span style={{ cursor: 'pointer' }}>
        <ReactHamburger
          isOpen={showSidebar}
          menuClicked={() => {
            dispatch({ type: 'toggleSidebar' })
          }}
          width={20}
          height={15}
          strokeWidth={1.5}
          rotate={0}
          color={dark ? 'white' : 'black'}
          borderRadius={0}
          animationDuration={0.8}
        />
      </span>
    </div>
  )
}

export default connect(() => ({ dark: getSetting('Theme')[0] !== 'Light' }))(HamburgerMenu)
