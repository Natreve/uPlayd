import { navigate } from "gatsby"
import React, { useEffect } from "react"
import Auth from "services/Auth"
import css from "./css.module.scss"
const Login = ({ user }) => {
  useEffect(() => {
    const $ = (s, o = document) => o.querySelector(s)
    const login = $(`.${css.loginForm}`)
    login.addEventListener("submit", e => {
      e.preventDefault()
      login.classList.add(css.processing)
      Auth.loginWithGoogle().then(onSuccess).catch(onFailure)
    })
    const onSuccess = user => {
      login.classList.add(css.success)
      login.classList.remove(css.processing, css.success)
      console.log("success", user)
      window.location.reload()
    }
    const onFailure = err => {
      login.classList.remove(css.processing)
      login.classList.add(css.error)
      console.log("failure", err)
    }
  })
  if (user) navigate("/")
  return (
    <div className={css.container}>
      <form className={css.loginForm}>
        <h1>Uplayd Team Management</h1>
        <button type="submit" className={css.button}>
          {/* <FontAwesomeIcon icon={faMicrosoft} /> */}
          <span>Login</span>
        </button>
      </form>
    </div>
  )
}
export default Login
