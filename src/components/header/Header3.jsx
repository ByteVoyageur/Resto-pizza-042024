import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useReducer, useRef } from 'react'

const initialState = {
  mobileMenuState: false, // 控制移动菜单的状态
}

function reducer(state, action) {
  switch (action.type) {
    case 'mobileMenu':
      return { ...state, mobileMenuState: action.isMobileMenu }
    default:
      return state
  }
}

function Header3() {
  const currentRoute = useRouter().pathname
  const [state, dispatch] = useReducer(reducer, initialState)
  const headerRef = useRef(null)

  // handle header sticky
  const handleScroll = () => {
    const scrollY = window.scrollY
    headerRef.current.className =
      scrollY > 10 ? 'sticky header-area style-3' : 'header-area style-3'
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header ref={headerRef} className='header-area style-3'>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        <div className='header-logo'>
          <Link href='/'>
            <img
              alt='Logo'
              className='img-fluid'
              src='/assets/images/icon/logo-dark.png'
            />
          </Link>
        </div>
        <nav
          className={`main-menu ${state.mobileMenuState ? 'show-menu' : ''}`}
        >
          <ul className='menu-list d-flex'>
            {/* Navigation links */}
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/menu'>Menu</Link>
            </li>
            <li>
              <Link href='/entrees'>Entrées</Link>
            </li>
            <li>
              <Link href='/plats'>Plats</Link>
            </li>
            <li>
              <Link href='/desserts'>Desserts</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className='nav-right d-flex align-items-center'>
          <div
            className='sidebar-button mobile-menu-btn'
            onClick={() =>
              dispatch({
                type: 'mobileMenu',
                isMobileMenu: !state.mobileMenuState,
              })
            }
          >
            <i className='bi bi-list'></i>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header3
