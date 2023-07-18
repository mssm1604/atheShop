import { UserContext } from "@/contexts/user"
import { useContext } from "react"

export function useUser() {
  const userContext = useContext(UserContext)

  return userContext
}
