import Link from 'next/link'
import React from 'react'

function Banner3() {
  return (
    <div className='home3-banner'>
      <div className='social-area'>
        <ul>
          <li>
            <a href='https://www.facebook.com/'>
              <i className='bx bxl-facebook' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/'>
              <i className='bx bxl-instagram-alt' />
            </a>
          </li>
          <li>
            <a href='https://www.pinterest.com/'>
              <i className='bx bxl-linkedin' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/'>
              <i className='bx bxl-twitter' />
            </a>
          </li>
        </ul>
      </div>

      <div className='video-wrap d-flex align-items-center justify-content-center'>
        <video autoPlay loop muted playsInline preload='auto'>
          <source src='assets/video/v2.mp4' type='video/mp4' />
        </video>
        <div className='banner-content text-center'>
          <span>
            {' '}
            <img
              className='left-vec'
              src='assets/images/icon/h3-sub-title-vec.svg'
              alt=''
            />{' '}
            La Flambée Italienne{' '}
            <img
              className='right-vec'
              src='assets/images/icon/h3-sub-title-vec.svg'
              alt=''
            />
          </span>
          <h1>
            Pizzas artisanales <br /> au feu de bois
          </h1>
          <Link legacyBehavior href='/menu1'>
            <a className='primary-btn7 btn-md2'>
              <i className='bi bi-arrow-up-right-circle' /> Nos pizzas
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner3
