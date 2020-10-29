import React, { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import localforage from "localforage"
export const Context = React.createContext()

const Provider = ({ children }) => {
  const [state, setState] = useState({ loading: true, user: null })
  const [updater, triggerUpdater] = useState(0)
  useEffect(() => {
    const init = async () => {
      let currentUser = await localforage.getItem("user")
      if (currentUser) {
        firebase.auth().onAuthStateChanged(async user => {
          if (user) {
            currentUser = Object.assign(currentUser, {
              uid: user.uid,
              name: user.displayName,
              email: user.email,
            })
            triggerUpdater(prevState => {
              setState(
                Object.assign(state, {
                  user: currentUser,
                  loading: false,
                })
              )
              localforage.setItem("user", currentUser)
              return prevState + 1
            })
          } else {
            // No user is signed in.
            triggerUpdater(prevState => {
              setState(Object.assign(state, { loading: false, user: null }))
              localforage.clear()
              return prevState + 1
            })
          }
        })
      } else {
        //No user signed in stop loading to reveal login screen
        triggerUpdater(prevState => {
          setState(Object.assign(state, { loading: false }))
          return prevState + 1
        })
      }
    }
    init()
  }, [state])
  console.log(state.user)
  console.log("Updater", updater)
  return (
    <Context.Provider
      value={{
        state,
        setUser: async user => {
          await localforage.setItem("user", user)
          setState(Object.assign(state, { user }))
        },
      }}
    >
      {children}
    </Context.Provider>
  )
}
export default ({ element }) => <Provider>{element}</Provider>
