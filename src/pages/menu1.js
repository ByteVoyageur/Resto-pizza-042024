import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'

function Menu1() {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    fetch('/menu.json')
      .then((response) => response.json())
      .then((data) => {
        // 过滤出只包含 "pizza" 字样的菜单项
        const filteredItems = data.filter((item) =>
          item.category.toLowerCase().includes('pizza')
        )
        setMenuItems(filteredItems)
      })
      .catch((error) => console.error('Error loading the menu data:', error))
  }, [])

  return (
    <Layout>
      <Breadcrumb pageName='Menu Pizzas' pageTitle='Menu Pizzas' />
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
              </div>
              <div className='menu-list'>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={item.baseId}>
                      <div className='sl'>
                        <span>{index + 1}.</span>
                      </div>
                      <div className='menu-content'>
                        <div className='menu-title'>
                          <div className='menu-title-content'>
                            <h4>{item.name}</h4>
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
                        <p>
                          {item.ingredients.join(', ')}
                          {item.after &&
                            item.after.map((ingredient, key) => (
                              <span key={key} className='highlight'>
                                {ingredient}
                              </span>
                            ))}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='notice-location'>
                <h4>
                  <span>N.S:</span> Si vous souffrez d'une intolérance d'une
                  allergie, merci de l'indiquer avant de votre commande.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Menu1
