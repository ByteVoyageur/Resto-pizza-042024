import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import Link from 'next/link'
import { FreeMode, Navigation, Thumbs } from 'swiper'
function NewItem1() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const smImgSlider = {
    loop: true,
    spaceBetween: 22,
    slidesPerView: 'auto',
    freeMode: true,
    // centeredSlides: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.next-btn-2',
      prevEl: '.prev-btn-2',
    },

    breakpoints: {
      280: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 6,
      },
      1400: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 6,
      },
    },
  }
  const bigImgSlider = {
    slidesPerView: 1,
    speed: 1200,
    // spaceBetween: 15,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination-g',
    },
  }
  return (
    <div className='new-items1 mb-120'>
      <div className='container'>
        <div className='row d-flex justify-content-center mb-40'>
          <div className='col-lg-8'>
            <div className='section-title text-center'>
              <span>FERMÉ LUNDI et MARDI</span>
              <div>
                tel. <span className='phone-number'>05</span>{' '}
                <span className='phone-number'>63</span>{' '}
                <span className='phone-number'>55</span>{' '}
                <span className='phone-number'>41</span>{' '}
                <span className='phone-number'>89</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-70 g-4 justify-content-center'>
          <div className='col-lg-4 col-md-6 col-sm-10'>
            <div className='new-items-wrap1 d-flex align-items-center justify-content-center'>
              <div className='items-content text-center'>
                <span>Offre spéciale</span>
                <h3>
                  La <span className='number'>11ͤ </span> et la{' '}
                  <span className='number'>21ͤ </span> PIZZA
                </h3>
                <div className='descount-area text-center'>
                  <h3>GRATUITES</h3>
                  <span>-100%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-10 order-lg-2 order-3'>
            <Swiper
              loop={true}
              {...bigImgSlider}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className='swiper new-item-big-slider'
            >
              <div className='swiper-wrapper'>
                <SwiperSlide className='swiper-slide'>
                  <div className='new-items-wrap2'>
                    <div className='items-img'>
                      <img
                        className='img-fluid'
                        src='assets/images/bg/pizza-new.png'
                        alt='new-items1'
                      />
                      <div className='price'>
                        <span>à partir de 8,50€</span>
                      </div>
                    </div>
                    <div className='content'>
                      <h3>
                        <Link legacyBehavior href='/shop-details'>
                          <a>Nos pizzas</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                  <div className='new-items-wrap2'>
                    <div className='items-img'>
                      <img
                        className='img-fluid'
                        src='assets/images/bg/salade-chevre-petite.png'
                        alt='new-items1'
                      />
                      <div className='price'>
                        <span>Nouvelle</span>
                      </div>
                    </div>
                    <div className='content'>
                      <h3>
                        <Link href='/shop-details' legacyBehavior>
                          <a>Salades</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                  <div className='new-items-wrap2'>
                    <div className='items-img'>
                      <img
                        className='img-fluid'
                        src='assets/images/bg/pates-pesto.png'
                        alt='new-items1'
                      />
                      <div className='price'>
                        <span>Nouvelle</span>
                      </div>
                    </div>
                    <div className='content'>
                      <h3>
                        <Link legacyBehavior href='/shop-details'>
                          <a>Pâtes</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                  <div className='new-items-wrap2'>
                    <div className='items-img'>
                      <img
                        className='img-fluid'
                        src='assets/images/bg/dessert-crepes.png'
                        alt='new-items1'
                      />
                      <div className='price'>
                        <span>Nouvelle</span>
                      </div>
                    </div>
                    <div className='content'>
                      <h3>
                        <Link legacyBehavior href='/shop-details'>
                          <a>Desserts</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                  <div className='new-items-wrap2'>
                    <div className='items-img'>
                      <img
                        className='img-fluid'
                        src='assets/images/bg/glaces.png'
                        alt='new-items1'
                      />
                      <div className='price'>
                        <span>Price - $8</span>
                      </div>
                    </div>
                    <div className='content'>
                      <h3>
                        <Link legacyBehavior href='/shop-details'>
                          <a>Full Chicken</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                  <div className='new-items-wrap2'>
                    <div className='items-img'>
                      <img
                        className='img-fluid'
                        src='assets/images/bg/menu-20-euros.png'
                        alt='new-items1'
                      />
                      <div className='price'>
                        <span>Menu 20€</span>
                      </div>
                    </div>
                    <div className='content'>
                      <h3>
                        <Link legacyBehavior href='/shop-details'>
                          <a>Entrée+Plat+Dessert</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-10 order-lg-3 order-2'>
            <div className='new-items-wrap3'>
              <div className='items-img'>
                <img
                  className='img-fluid'
                  src='assets/images/bg/reservation-table2.png'
                  alt='reserve1'
                />
              </div>
              <div className='overlay d-flex align-items-center justify-content-center'>
                <div className='items-content text-center'>
                  <span>
                    <img
                      className='left-vec'
                      src='assets/images/icon/shape-white1.svg'
                      alt='sub-title-vec'
                    />
                    Reservation
                    <img
                      className='right-vec'
                      src='assets/images/icon/shape-white1.svg'
                      alt='sub-title-vec'
                    />
                  </span>
                  <h3>
                    <Link href='/reservation' legacyBehavior>
                      <a>Nous appeler au </a>
                    </Link>
                  </h3>
                  <Link legacyBehavior href='tel:0563554189'>
                    <a className='primary-btn btn-sm'>0563554189</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row position-relative'>
          <Swiper
            onSwiper={setThumbsSwiper}
            {...smImgSlider}
            className='swiper new-item-sm-slider'
          >
            <div className='swiper-wrapper'>
              <SwiperSlide className='swiper-slide'>
                <div className='new-items-sm-img'>
                  <img
                    src='assets/images/bg/pizza-new.png'
                    alt='new-item-sm1'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='new-items-sm-img'>
                  <img
                    src='assets/images/bg/salade-chevre-petite.png'
                    alt='new-item-sm2'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='new-items-sm-img'>
                  <img
                    src='assets/images/bg/pates-pesto.png'
                    alt='new-item-sm3'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='new-items-sm-img'>
                  <img
                    src='assets/images/bg/dessert-crepes.png'
                    alt='dessert-crepes'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='new-items-sm-img'>
                  <img src='assets/images/bg/glaces.png' alt='new-item-sm5' />
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='new-items-sm-img'>
                  <img
                    src='assets/images/bg/menu-20-euros.png'
                    alt='new-item-sm6'
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className='swiper-btn d-flex justify-content-between align-items-center'>
            <div className='prev-btn-2'>
              <i className='bi bi-arrow-left' />
            </div>
            <div className='next-btn-2'>
              <i className='bi bi-arrow-right' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewItem1
