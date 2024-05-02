import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'

function MenuPates() {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    fetch('/menu.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredItems = data.filter(
          (item) => item.category.toLowerCase() === 'pâtes'
        )
        setMenuItems(filteredItems)
      })
      .catch((error) => console.error('Error loading the menu data:', error))
  }, [])

  return (
    <Layout>
      <Breadcrumb pageName='Menu Pâtes' pageTitle='Menu Pâtes' />
      <div className='menu-divider'>
        <img src='assets/images/icon/sub-title-vec.svg' alt='sub-title-vec' />
        <span />
        <img src='assets/images/icon/sub-title-vec.svg' alt='sub-title-vec' />
      </div>
      <div className='indian-menu pt-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 px-0 order-lg-1 order-2'>
              <div className='menu-wrapper1 two'>
                <div className='section-title text-center pt-60'>
                  <span>Menu Pâtes</span>
                </div>
                <ul className='menu-list entree-list'>
                  {menuItems.map((item, index) => (
                    <li key={item.baseId}>
                      <div className='menu-content'>
                        <div className='menu-title'>
                          <div className='menu-title-content'>
                            <h5>{item.name}</h5>
                            {item.tags && item.tags.includes('nouvelle') && (
                              <img
                                className='diagram-plaque-img'
                                src='assets/images/nouvelle.png'
                                alt='Nouvelle'
                              />
                            )}
                            <span className='dot'>
                              <img src='assets/images/icon/dot.svg' alt='' />
                            </span>
                            <span className='price'>{item.price}</span>
                          </div>
                        </div>
                        <p className='entree-info'>
                          {item.ingredients.join(', ')}
                          {item.after && item.after.length > 0 && ', '}
                          {item.after &&
                            item.after.map((ingredient, key) => (
                              <span key={key} className='after-highlight'>
                                {ingredient}
                                {key < item.after.length - 1 ? ', ' : ''}
                              </span>
                            ))}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='col-lg-6 px-0 order-lg-2 order-1'>
              <div className='food-orgin default-class entrees-img'>
                <div className='resturent-name'></div>
                <img
                  src='assets/images/icon/food-origin.svg'
                  alt='food-origin'
                />
                <h2>Pâtes</h2>
                <img
                  src='assets/images/icon/food-origin.svg'
                  alt='food-origin'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='menu-divider'>
          <img src='assets/images/icon/sub-title-vec.svg' alt='sub-title-vec' />
          <span />
          <img src='assets/images/icon/sub-title-vec.svg' alt='sub-title-vec' />
        </div>
      </div>
    </Layout>
  )
}

export default MenuPates
