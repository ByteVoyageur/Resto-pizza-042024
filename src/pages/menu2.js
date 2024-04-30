import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'

function Menu1() {
  return (
    <Layout>
      <Breadcrumb pageName='Menu Pizzas' pageTitle='Menu Pizzas' />
      <div>
        <div className='indian-menu pt-120'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 px-0 order-lg-1 order-2'>
                <div className='menu-wrapper1 two'>
                  <img
                    className='menu-top-left'
                    src='assets/images/icon/menu-top-left.svg'
                    alt='menu-top-left'
                  />
                  <img
                    className='menu-top-right'
                    src='assets/images/icon/menu-top-right.svg'
                    alt='menu-top-right'
                  />
                  <img
                    className='menu-btm-right'
                    src='assets/images/icon/menu-btm-right.svg'
                    alt='menu-btm-right'
                  />
                  <img
                    className='menu-btm-left'
                    src='assets/images/icon/menu-btm-left.svg'
                    alt='menu-btm-left'
                  />
                  <div className='section-title text-center pt-60'>
                    <span>
                      <img
                        className='left-vec'
                        src='assets/images/icon/sub-title-vec.svg'
                        alt='sub-title-vec'
                      />
                      26cm 8,50€ <br />
                      <img
                        className='right-vec'
                        src='assets/images/icon/sub-title-vec.svg'
                        alt='sub-title-vec'
                      />
                      33cm 10,50€
                    </span>
                    {/* <h2>Menu Pizzas</h2> */}
                  </div>
                  <div className='diagram'>
                    <div className='diagram-plaque'>
                      <img
                        className='diagram-plaque-img'
                        src='assets/images/baking-tray.png'
                        alt='réalisable en plaque'
                      />
                      Réalisable en plaque
                    </div>
                    <div className='diagram-vegetable'>
                      <img
                        className='diagram-vegetable-img'
                        src='assets/images/vegetable.png'
                        alt='vegetable'
                      />
                      Végétarien
                    </div>
                  </div>
                  <div className='menu-list'>
                    <ul>
                      <li>
                        <div className='sl'>
                          <span>01.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>Jambon</h4>
                              <img
                                className='diagram-plaque-img'
                                src='assets/images/baking-tray.png'
                                alt='réalisable en plaque'
                              />
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>tomate, jambon, oeuf, olives, fromage</p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>02.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>Reine</h4>
                              <img
                                className='diagram-plaque-img'
                                src='assets/images/baking-tray.png'
                                alt='réalisable en plaque'
                              />
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>tomate, champignons, jambon, fromage</p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>03.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>Romaine</h4>
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>
                            tomate, jambon, olives, filet de crème, fromage,
                            <span class='highlight'>oeuf</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>04.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>Fruits de Mer</h4>
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>
                            tomate, fruits de mer, fromage
                            <span class='highlight'>oeuf</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>05.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>Campionne</h4>
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>
                            Tomate, boeuf haché, oignons, fromage
                            <span class='highlight'>oeuf</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>06.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>Kebab</h4>
                              <img
                                className='diagram-plaque-img'
                                src='assets/images/baking-tray.png'
                                alt='réalisable en plaque'
                              />
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>Tomate, jambon, oeuf, olives, fromage</p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>07.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>Campagnarde</h4>
                              <img
                                className='diagram-plaque-img'
                                src='assets/images/baking-tray.png'
                                alt='réalisable en plaque'
                              />
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>Tomate, champignons, lardons, oignons, fromage</p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>08.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>Fermière</h4>
                              <img
                                className='diagram-plaque-img'
                                src='assets/images/baking-tray.png'
                                alt='réalisable en plaque'
                              />
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>tomate, poulet, champignons, fromage</p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>09.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>chèvre miel</h4>
                              <img
                                className='diagram-plaque-img'
                                src='assets/images/baking-tray.png'
                                alt='réalisable en plaque'
                              />
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>Tomate, chèvre, fromage, miel</p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>10.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>Merguez</h4>
                              <img
                                className='diagram-plaque-img'
                                src='assets/images/baking-tray.png'
                                alt='réalisable en plaque'
                              />
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>tomate, merguez, poivrons, fromage</p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>11.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>Chorizo</h4>
                              <img
                                className='diagram-plaque-img'
                                src='assets/images/baking-tray.png'
                                alt='réalisable en plaque'
                              />
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>Tomate, jambon, chorizo, fromage</p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>12.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <div className='menu-title-content'>
                              <h4>Indienne</h4>
                              <img
                                className='diagram-plaque-img'
                                src='assets/images/baking-tray.png'
                                alt='réalisable en plaque'
                              />
                            </div>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'></span>
                          </div>
                          <p>Tomate, poulet, curry, ooignon, fromage</p>
                        </div>
                      </li>
                    </ul>
                    <div className='notice-location'>
                      <h4>
                        <span>N.S:</span> Si vous souffrez d'une intolérance
                        d'une allergiem, merci de l'indiquer avant de votre
                        commande.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 px-0 order-lg-2 order-1'>
                <div className='food-orgin one'>
                  <div className='resturent-name'></div>
                  <img
                    src='assets/images/icon/food-origin.svg'
                    alt='food-origin'
                  />
                  <h2>Pizzas Classiques</h2>
                  <img
                    src='assets/images/icon/food-origin.svg'
                    alt='food-origin'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='menu-divider'>
          <img src='assets/images/icon/sub-title-vec.svg' alt='sub-title-vec' />
          <span />
          <img src='assets/images/icon/sub-title-vec.svg' alt='sub-title-vec' />
        </div>
        <div className='itlian-menu'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 px-0'>
                <div className='food-orgin two'>
                  <div className='resturent-name'>
                    <h2>RESTHO</h2>
                  </div>
                  <img
                    src='assets/images/icon/food-origin.svg'
                    alt='food-origin'
                  />
                  <h2>Italian Menu</h2>
                  <img
                    src='assets/images/icon/food-origin.svg'
                    alt='food-origin'
                  />
                </div>
              </div>
              <div className='col-lg-6 px-0'>
                <div className='menu-wrapper1 two'>
                  <img
                    className='menu-top-left'
                    src='assets/images/icon/menu-top-left.svg'
                    alt='menu-top-left'
                  />
                  <img
                    className='menu-top-right'
                    src='assets/images/icon/menu-top-right.svg'
                    alt='menu-top-right'
                  />
                  <img
                    className='menu-btm-right'
                    src='assets/images/icon/menu-btm-right.svg'
                    alt='menu-btm-right'
                  />
                  <img
                    className='menu-btm-left'
                    src='assets/images/icon/menu-btm-left.svg'
                    alt='menu-btm-left'
                  />
                  <div className='section-title text-center pt-60'>
                    <span>
                      <img
                        className='left-vec'
                        src='assets/images/icon/sub-title-vec.svg'
                        alt='sub-title-vec'
                      />
                      Welcome to Restho
                      <img
                        className='right-vec'
                        src='assets/images/icon/sub-title-vec.svg'
                        alt='sub-title-vec'
                      />
                    </span>
                    {/* <h2>Indian Menu</h2> */}
                  </div>
                  <div className='menu-list'>
                    <ul>
                      <li>
                        <div className='sl'>
                          <span>01.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Paneer Butter</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$10</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>02.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Veg Biriyani</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$15</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>03.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Fried Rice</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$22</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>04.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Italian Sambar</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>05.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Italian Rasam</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$10</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>06.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Chicken Tikka</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>07.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Vegetarian Burger</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className='notice-location'>
                      <h4>
                        <span>N.B:</span> All food are available in restauarnt
                        &amp; don’t waste your food.
                      </h4>
                      <p>Address: Mirpur DOHS, House No-167/170, Avenue-01.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='menu-divider'>
          <img src='assets/images/icon/sub-title-vec.svg' alt='sub-title-vec' />
          <span />
          <img src='assets/images/icon/sub-title-vec.svg' alt='sub-title-vec' />
        </div>
        <div className='reguler-menu mb-120'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 px-0 order-lg-1 order-2'>
                <div className='menu-wrapper1 two'>
                  <img
                    className='menu-top-left'
                    src='assets/images/icon/menu-top-left.svg'
                    alt='menu-top-left'
                  />
                  <img
                    className='menu-top-right'
                    src='assets/images/icon/menu-top-right.svg'
                    alt='menu-top-right'
                  />
                  <img
                    className='menu-btm-right'
                    src='assets/images/icon/menu-btm-right.svg'
                    alt='menu-btm-right'
                  />
                  <img
                    className='menu-btm-left'
                    src='assets/images/icon/menu-btm-left.svg'
                    alt='menu-btm-left'
                  />
                  <div className='section-title text-center pt-60'>
                    <span>
                      <img
                        className='left-vec'
                        src='assets/images/icon/sub-title-vec.svg'
                        alt='sub-title-vec'
                      />
                      Welcome to Restho
                      <img
                        className='right-vec'
                        src='assets/images/icon/sub-title-vec.svg'
                        alt='sub-title-vec'
                      />
                    </span>
                    {/* <h2>Indian Menu</h2> */}
                  </div>
                  <div className='menu-list'>
                    <ul>
                      <li>
                        <div className='sl'>
                          <span>01.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Paneer Butter</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$10</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>02.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Veg Biriyani</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$15</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>03.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Fried Rice</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$22</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>04.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Sambar</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>05.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Rasam</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$10</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>06.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Chicken Tikka</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='sl'>
                          <span>07.</span>
                        </div>
                        <div className='menu-content'>
                          <div className='menu-title'>
                            <h4>Vegetarian Burger</h4>
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>$18</span>
                          </div>
                          <p>
                            To much delicious food in our restaurant.Visit us
                            &amp; taste it early.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className='notice-location'>
                      <h4>
                        <span>N.B:</span> All food are available in restauarnt
                        &amp; don’t waste your food.
                      </h4>
                      <p>Address: Mirpur DOHS, House No-167/170, Avenue-01.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 px-0 order-lg-2 order-1'>
                <div className='food-orgin three'>
                  <div className='resturent-name'>
                    <h2>RESTHO</h2>
                  </div>
                  <img
                    src='assets/images/icon/food-origin.svg'
                    alt='food-origin'
                  />
                  <h2>Reguler Menu</h2>
                  <img
                    src='assets/images/icon/food-origin.svg'
                    alt='food-origin'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Menu1
