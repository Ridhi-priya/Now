import React from 'react'
import Styles from './Home.module.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SideMenue from '../components/sidemenu/SideMenue'
import Dashboard from '../components/RightSection/Dashboard/Dashboard'
import Rolemanagement from '../components/RightSection/Rolemanagement/Rolemanagement'
import Schedule from '../components/RightSection/Schedule/Schedule'
import Customer from '../components/RightSection/Customer/Customer'
import Brands from '../components/RightSection/Brands/Brands'
import Categories from '../components/RightSection/Categories/Categories'
import Products from '../components/RightSection/Products/Products'
import Store from '../components/RightSection/Store/Store'
import StoreCategories from '../components/RightSection/StoreCategories/StoreCategories'
import Pickers from '../components/RightSection/Pickers/Pickers'
import Allorders from '../components/RightSection/Orders/AllOrders/AllOrders'
import Upcomingorders from '../components/RightSection/Orders/UpcomingOrders/UpcomingOrders'
import AcceptedOrders from '../components/RightSection/Orders/AcceptedOrders/AcceptedOrders'
import Advertisements from '../components/RightSection/Advertisements/Advertisements'
import Geofence from '../components/RightSection/Geofence/Geofence'
import Active from '../components/RightSection/Promocode/Active/Active'
import Inactive from '../components/RightSection/Promocode/InActive/InActive'
import Notifications from '../components/RightSection/Notifications/Notifications'
import CancellationReasons from '../components/RightSection/CancellationReasons/CancellationReasons'
import Orderbeingpacked from '../components/RightSection/Orders/OrdersBeingPacked/OrdersBeingPacked'
import Readyfordelivery from '../components/RightSection/Orders/ReadyForDelivery/ReadyForDelivery'
import Ontheway from '../components/RightSection/Orders/OnTheWay/OnTheWay'
import Completedorders from '../components/RightSection/Orders/CompletedOrders/CompletedOrders'
import Cancelledorders from '../components/RightSection/Orders/CancelledOrders/CancelledOrders'
import Reports from '../components/RightSection/Reports/Reports'
import Settings from '../components/RightSection/Settings/Settings'
import Images from '../components/RightSection/Images/Images'
import { StylesContext } from '@mui/styles'

// import { AccountContext } from '../context/AccountProvider'
// import { useContext } from 'react'

function Home() {
  //   const { user } = useContext(AccountContext)
  return (
    <div className={Styles.rightContainer}>
      <Router>
        <SideMenue />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/rolemanagement' component={Rolemanagement} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/customer' component={Customer} />
          <Route path='/brands' component={Brands} />
          <Route path='/categories' component={Categories} />
          <Route path='/products' component={Products} />
          <Route path='/store' component={Store} />
          <Route path='/storecategories' component={StoreCategories} />
          <Route path='/pickers' component={Pickers} />
          <Route path='/orders/allorders' component={Allorders} />
          <Route path='/orders/upcomingorders' component={Upcomingorders} />
          <Route path='/orders/acceptedorders' component={AcceptedOrders} />
          <Route path='/orders/ontheway' component={Ontheway} />
          <Route
            path='/orders/ordersbeingpacked'
            component={Orderbeingpacked}
          />
          <Route path='/orders/readyfordelivery' component={Readyfordelivery} />
          <Route path='/orders/completedorders' component={Completedorders} />
          <Route path='/orders/cancelledorders' component={Cancelledorders} />
          <Route path='/advertisements' component={Advertisements} />
          <Route path='/promocode/active' component={Active} />
          <Route path='/promocode/inactive' component={Inactive} />
          <Route path='/geofence' component={Geofence} />
          <Route path='/notifications' component={Notifications} />
          <Route path='/cancellationreasons' component={CancellationReasons} />
          <Route path='/reports' component={Reports} />
          <Route path='/settings' component={Settings} />
          <Route path='/images' component={Images} />
        </Switch>
      </Router>

      {/* <RoleManagementForm /> */}
    </div>
  )
}

export default Home
