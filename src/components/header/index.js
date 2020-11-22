import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css";

import LOGO from "./logo.png";
import { Alignment, Button, Icon, Navbar, Popover } from "@blueprintjs/core";

const Header = () => (
  <header class="header-wrapper">
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>
          <img src={LOGO} class="logo" />
        </Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT} className="nav-right">
        <Popover>
          <Button text="Film" icon="film" rightIcon="caret-down" minimal={true} />
          <div>
            Some Stuff Here
          </div>
        </Popover>
        <Popover>
          <Button text="Film" icon="snowflake" rightIcon="caret-down" minimal={true} />
          <div>
            Some Stuff Here
          </div>
        </Popover>
        <Button className="upload-btn" icon="cloud-upload" text="UPLOAD"/>
        <div>
          <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" className="profile-image" />
        </div>
      </Navbar.Group>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
