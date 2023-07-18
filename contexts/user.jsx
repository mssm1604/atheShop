"use client"

import { createContext, useEffect, useState } from "react"
import { getSession } from "next-auth/react"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState()

  useEffect(() => {
    ;(async () => {
      const session = await getSession()
      setUser(session)
    })()
  }, [])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}
