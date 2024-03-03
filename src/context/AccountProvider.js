import React, { createContext, useState, useEffect } from 'react'

export const AccountContext = createContext(null)

function AccountProvider({ children }) {
  const [clicked, setClicked] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  //const [user, setUser] = useState(true)
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  return (
    <AccountContext.Provider
      value={{
        clicked,
        setClicked,
        user,
        setUser,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider
