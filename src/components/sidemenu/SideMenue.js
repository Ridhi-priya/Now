import { React, useContext, useState } from 'react'
import logo from '../../assets/logo.png'
import { AccountContext } from '../../context/AccountProvider'
import Logout from '../RightSection/Logout/Logout'
import './Sidemenu.css'

const SideMenue = () => {
  const [inactive, setInactive] = useState(false)
  const [ordershow, setOrdershow] = useState(false)
  const [promoshow, setPromoshow] = useState(false)
  const { setUser } = useContext(AccountContext)

  return (
    <div className={`side-menu ${inactive ? 'inactive' : ''}`}>
      <div className='top-section '>
        <div className='logo'>
          <img src={logo} alt='now' />
        </div>
        <div
          onClick={() => {
            setInactive(!inactive)
          }}
          className='toggle-menu-btn'
        >
          {inactive ? (
            <i className='bi bi-box-arrow-in-right'></i>
          ) : (
            <i className='bi bi-box-arrow-in-left'></i>
          )}
        </div>
        <div className='search-controller'>
          <button className='search-btn'>
            <i className='bi bi-search'></i>
          </button>

          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='divider'></div>
      <div className='main-menu'>
        <ul>
          <li>
            <a href='/dashboard' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-speedometer2'></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href='/rolemanagement' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-people'></i>
              </div>
              <span>Role-Management</span>
            </a>
          </li>
          <li>
            <a href='/schedule' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-calendar-event'></i>
              </div>
              <span>Schedule</span>
            </a>
          </li>
          <li>
            <a href='/customer' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-person-circle'></i>
              </div>
              <span>Customer</span>
            </a>
          </li>
          <li>
            <a href='/brands' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-twitch'></i>
              </div>
              <span>Brands</span>
            </a>
          </li>
          <li>
            <a href='/categories' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-body-text'></i>
              </div>
              <span>Categories</span>
            </a>
          </li>
          <li>
            <a href='products' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-cart3'></i>
              </div>
              <span>Products</span>
            </a>
          </li>
          <li>
            <a href='/store' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-shop'></i>
              </div>
              <span>Stores</span>
            </a>
          </li>
          <li>
            <a href='/storecategories' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-building'></i>
              </div>
              <span>Store-Categories</span>
            </a>
          </li>
          <li>
            <a href='/pickers' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-minecart-loaded'></i>
              </div>
              <span>Pickers</span>
            </a>
          </li>
          <li>
            <a className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-box-seam'></i>
              </div>
              <span>Orders</span>
            </a>
            <i
              className='bi bi-chevron-down hide-show'
              onClick={() => setOrdershow(!ordershow)}
            ></i>
            <div style={{ display: ordershow ? 'block' : 'none' }}>
              <ul className='sub-menu'>
                <li>
                  <a href='/orders/allorders'>
                    <div className='menu-subicon'>
                      <i className='bi bi-boxes'></i>
                    </div>
                    All Orders
                  </a>
                </li>
                <li>
                  <a href='/orders/upcomingorders'>
                    <div className='menu-subicon'>
                      <i className='bi bi-box2'></i>
                    </div>
                    Upcoming Orders
                  </a>
                </li>
                <li>
                  <a href='/orders/acceptedorders'>
                    <div className='menu-subicon'>
                      <i className='bi bi-box2-heart'></i>
                    </div>
                    Accepted Orders
                  </a>
                </li>
                <li>
                  <a href='/orders/ordersbeingpacked'>
                    <div className='menu-subicon'>
                      <i className='bi bi-gift'></i>
                    </div>
                    Orders Being-Packed
                  </a>
                </li>
                <li>
                  <a href='/orders/readyfordelivery'>
                    <div className='menu-subicon'>
                      <i className='bi bi-house'></i>
                    </div>
                    Ready for delivery
                  </a>
                </li>
                <li>
                  <a href='/orders/ontheway'>
                    <div className='menu-subicon'>
                      <i className='bi bi-signpost-split'></i>
                    </div>
                    On the way
                  </a>
                </li>
                <li>
                  <a href='/orders/completedorders'>
                    <div className='menu-subicon'>
                      <i className='bi bi-truck'></i>
                    </div>
                    Completed Orders
                  </a>
                </li>
                <li>
                  <a href='/orders/cancelledorders'>
                    <div className='menu-subicon'>
                      <i className='bi bi-cart-x'></i>
                    </div>
                    Cancelled Orders
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href='/advertisements' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-megaphone'></i>
              </div>
              <span>Advertisements</span>
            </a>
          </li>
          <li>
            <a href='/geofence' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-geo-alt'></i>
              </div>
              <span>Geofence</span>
            </a>
          </li>
          <li>
            <a className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-file-earmark-ppt'></i>
              </div>
              <span>Promo codes</span>
            </a>
            <i
              className='bi bi-chevron-down hide-show'
              onClick={() => setPromoshow(!promoshow)}
            ></i>
            <div style={{ display: promoshow ? 'block' : 'none' }}>
              <ul className='sub-menu'>
                <li>
                  <a href='/promocode/active'>
                    <div className='menu-subicon'>
                      <i className='bi bi-skip-start-circle'></i>
                    </div>
                    Active
                  </a>
                </li>
                <li>
                  <a href='/promocode/inactive'>
                    <div className='menu-subicon'>
                      <i className='bi bi-stop-circle'></i>
                    </div>
                    Inactive
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href='/notifications' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-bell'></i>
              </div>
              <span>Push-Notification</span>
            </a>
          </li>
          <li>
            <a href='cancellationreasons' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-x-circle'></i>
              </div>
              <span>Cancellation-Reasons</span>
            </a>
          </li>
          <li>
            <a href='/reports' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-graph-up-arrow'></i>
              </div>
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a href='/settings' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-gear-wide-connected'></i>
              </div>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href='/images' className='menu-item'>
              <div className='menu-icon'>
                <i className='bi bi-images'></i>
              </div>
              <span>Images</span>
            </a>
            <div className='divider'></div>
            <li>
              <a href='/login' onClick={() => setUser(false)}>
                <Logout />
              </a>
            </li>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenue
