import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'

function Menu1() {
  const [menuItems, setMenuItems] = useState({})

  useEffect(() => {
    fetch('/menu.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredItems = data.filter((item) =>
          item.category.toLowerCase().includes('pizza')
        )
        const groupedItems = filteredItems.reduce((acc, item) => {
          const key = item.category.toLowerCase()
          if (!acc[key]) {
            acc[key] = []
          }
          acc[key].push(item)
          return acc
        }, {})

        Object.keys(groupedItems).forEach((key) => {
          groupedItems[key] = groupedItems[key].map((item, index) => ({
            ...item,
            localIndex: index + 1,
          }))
        })

        setMenuItems(groupedItems)
      })
      .catch((error) => console.error('Error loading the menu data:', error))
  }, [])

  // Mapping each category to its corresponding style and section.
  const categoryStyles = {
    'pizzas classiques': 'indian-menu pt-120',
    'pizzas délicieuses': 'itlian-menu',
    'pizzas spéciales': 'reguler-menu mb-120',
    // You can add more categories with their respective styles here.
  }

  const categoryClassSuffix = {
    'pizzas classiques': 'one',
    'pizzas délicieuses': 'two',
    'pizzas spéciales': 'three',
    'pizzas gourmandes': 'four',
  }

  function getCategoryClass(category) {
    console.log('Requested category:', category) // 打印请求的类别
    console.log('Available keys:', Object.keys(categoryClassSuffix)) // 打印所有可用的键
    return categoryClassSuffix[category] || 'default-class'
  }

  return (
    <Layout>
      <Breadcrumb pageName='Menu Pizzas' pageTitle='Menu Pizzas' />
      {Object.keys(menuItems).map((category) => (
        <div
          key={category}
          className={
            categoryStyles[category.split(' ').join(' ').toLowerCase()]
          }
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 px-0 order-lg-1 order-2'>
                <div className='menu-wrapper1 two'>
                  {/* Menu Section Title and Decorative Images */}
                  <div className='section-title text-center pt-60'>
                    <span>
                      <img
                        className='left-vec'
                        src='assets/images/icon/sub-title-vec.svg'
                        alt='Sub Title Vector'
                      />
                      {category.replace('pizzas ', '').toUpperCase()}
                      <img
                        className='right-vec'
                        src='assets/images/icon/sub-title-vec.svg'
                        alt='Sub Title Vector'
                      />
                    </span>
                  </div>
                  <div className='menu-list'>
                    <ul>
                      {menuItems[category].map((item) => (
                        <li key={item.baseId}>
                          <div className='sl'>
                            <span>{item.localIndex}.</span>
                          </div>
                          <div className='menu-content'>
                            <div className='menu-title'>
                              <div className='menu-title-content'>
                                <h4>{item.name}</h4>
                                <img
                                  className='diagram-plaque-img'
                                  src='assets/images/baking-tray.png'
                                  alt='Réalisable en plaque'
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
                </div>
              </div>
              <div className='col-lg-6 px-0 order-lg-2 order-1'>
                <div className={`food-orgin ${getCategoryClass(category)}`}>
                  <div className='resturent-name'></div>
                  <img
                    src='assets/images/icon/food-origin.svg'
                    alt='food-origin'
                  />
                  <h2>
                    {category.split(' ')[0].charAt(0).toUpperCase() +
                      category.split(' ')[0].slice(1)}{' '}
                    {category.split(' ')[1].charAt(0).toUpperCase() +
                      category.split(' ')[1].slice(1)}
                  </h2>
                  <img
                    src='assets/images/icon/food-origin.svg'
                    alt='food-origin'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='menu-divider'>
            <img
              src='assets/images/icon/sub-title-vec.svg'
              alt='Sub Title Vector'
            />
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Menu1
