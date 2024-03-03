import './App.css'
import Mainpage from './pages/Register/Mainpage/Mainpage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RegisterForm from './pages/Register/RegisterForm/RegisterForm.js'
import Registerbtn from './pages/Register/Mainpage/Mainpage'
import Login from './pages/Register/Login/Login'
import Home from './pages/Home'
import { AccountContext } from './context/AccountProvider'
import { useContext } from 'react'

function App() {
  const { user } = useContext(AccountContext)
  return (
    <div>
      <Router>
        <Switch>
          {user ? (
            <Route path='/'>
              <Home />
            </Route>
          ) : (
            <Route exact path='/'>
              <Registerbtn />
            </Route>
          )}
          <Route path='/register'>{user ? <Home /> : <RegisterForm />}</Route>
          <Route path='/login'>{user ? <Home /> : <Login />}</Route>
          <Route path='/registerbtn'>{user ? <Home /> : <Registerbtn />}</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
