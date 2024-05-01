import Link from 'next/link'
import React from 'react'

function About3() {
  return (
    <div className='introduction-area pt-120 mb-120'>
      <div className='container'>
        <div className='row align-items-end gy-5'>
          <div className='col-lg-7'>
            <div className='section-title3'>
              <span>
                {' '}
                <img
                  className='left-vec'
                  src='assets/images/icon/h3-sub-title-vec.svg'
                  alt=''
                />{' '}
                Sur commande{' '}
                <img
                  className='right-vec'
                  src='assets/images/icon/h3-sub-title-vec.svg'
                  alt=''
                />
              </span>
              <h2>Pizzas en plaque 40х60cm</h2>
            </div>
            <div className='introduction-content'>
              <p>
                Idéale pour les apéritifs, les entrées de grandes soirées...
              </p>
              <div className='about-features'>
                <ul>
                  <li>
                    <i className='bi bi-chevron-double-right' />
                    Classique: 29€
                  </li>
                  <li>
                    <i className='bi bi-chevron-double-right' />
                    Délicieuse: 33€
                  </li>
                  <li>
                    <i className='bi bi-chevron-double-right' />
                    Spéciale: 36€
                  </li>
                </ul>
              </div>
              <div className='achievement'>
                <h5>Peuvent être découpées en 46 ou 96 parts</h5>
              </div>
              <div className='discover-btn'>
                <Link legacyBehavior href='/menu1'>
                  <a className='primary-btn7 btn-md2'>
                    <i className='bi bi-arrow-up-right-circle' />
                    Discover More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='h3-into-img-big'>
              <img
                className='img-fluid'
                src='assets/images/bg/h3-intro-big.png'
                alt='h3-intro-big'
              />
              <div className='h3-into-img-sm magnetic-wrap'>
                <img
                  className='img-fluid magnetic-item'
                  src='assets/images/bg/h3-intro-sm.png'
                  alt='h3-intro-sm'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About3
