import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='footer-top '>
        <div className='container'>
          <div className='row justify-content-center align-items-center gy-5'>
            <div className='col-lg-4  order-md-2 order-1'>
              <div className='footer-widgetfooter-widget social-area'>
                <div className='footer-logo text-center'>
                  <Link legacyBehavior href='/'>
                    <img
                      className='logo-claire'
                      src='assets/images/logo-claire.png'
                      alt=''
                    />
                  </Link>
                  <p>Depuis 2002</p>
                  <span>
                    <img src='assets/images/icon/footer-shape.svg' alt='' />
                  </span>
                </div>
                <div className='footer-social'>
                  <ul className='social-link d-flex align-items-center justify-content-center'>
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
              </div>
            </div>
            <div className='col-lg-4  order-md-3 order-3'>
              <div className='footer-widget one'>
                <div className='widget-title'>
                  <h3>Nous contater</h3>
                </div>
                <div className='contact-info'>
                  <div className='single-contact'>
                    <span className='title'>Phone:</span>
                    <span className='content'>
                      <a href='tel:+33563554189'>05 63 55 41 89</a>
                    </span>
                  </div>
                  <div className='single-contact'>
                    <span className='title'>Email:</span>
                    <span className='content'>
                      <a href='mailto:info@example.com'>info@example.com</a>
                    </span>
                  </div>

                  <div className='single-contact'>
                    <span className='title'>Location:</span>
                    <span className='content'>
                      <a href='https://maps.app.goo.gl/bXtTHTV64tz1dYxq8'>
                        28 avenue Jules-Pelissier,
                        <br />
                        Réalmont, 81120
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-btm'>
        <div className='container'>
          <div className='row border-ttop g-2'>
            <div className='col-md-8 justify-content-md-start justify-content-center'>
              <div className='copyright-area'>
                <p>
                  @Copyright by{' '}
                  <Link legacyBehavior href='#'>
                    La Flambée Italienne
                  </Link>
                  -2024, All Right Reserved.
                </p>
              </div>
            </div>
            <div className='col-md-4 d-flex justify-content-md-end justify-content-center'>
              <div className='privacy-policy'></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
