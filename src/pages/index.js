import React from "react"
import { Router } from "@reach/router"
import { Context } from "services/Provider"

import Login from "views/login"
import Dashboard from "views/dashboard"
import NotFound from "views/404"

import "./blueprint.css"
import TeamSchedule from "../views/team/schedule/TeamSchedule"
// import "./blueprint-icons.css"

const App = () => {

  return (
    <Context.Consumer>
      {context => {
        // if (!context) return <div>Setting up content...</div>
        // const {
        //   state: { loading, user },
        // } = context
        // if (loading) return <div>Loading content...</div>
        // if (!user) return <Login path="login" />
        return (
          <Router basepath="/">
            <Login path="login" />
            <Dashboard path="/" context={context} />
            <TeamSchedule path="/teamschedule" />
            <NotFound default />
          </Router>
        )
      }}
    </Context.Consumer>
  )
}

export default App
