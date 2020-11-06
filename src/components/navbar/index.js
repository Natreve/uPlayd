import React, { useState } from "react"
import { Link } from "gatsby"
import css from "./css.module.scss"
import Logo from "components/logo"

const NavBar = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggleNavBar = () => setOpen(prevState => !prevState)
  const isOpen = open ? css.open : ""
  return (
    <div className={css.navigation}>
      <Logo />
      <div className={css.toggle} onClick={toggleNavBar}>
        <div className={[css.hamburger, isOpen].join(" ")}></div>
      </div>
      <div className={css.navBox}>{children}</div>
    </div>
  )
}

const NavBarItem = ({ children: item, path }) => {
  return (
    <div className={css.navbarItem}>
      <Link to={path}>{item}</Link>
    </div>
  )
}
export { NavBar, NavBarItem }
