import videojs from 'video.js'
import React from "react";
import ReactDOM from 'react-dom';
import styles from './Banner.module.scss'; // Import css modules stylesheet as styles

export default class Banner extends videojs.getComponent('Component') {
  constructor(player, options) {
    super(player, options)

    const name = "header_banner";
    this.el().id = name;

    player.ready(function () {
      console.log(this.el().firstChild);
      ReactDOM.render(
        <BannerComponent items={options.items} />
        ,
        document.getElementById(name)
      );
    });

    this.on("dispose", () => {
      ReactDOM.unmountComponentAtNode(this.el())
    });

  }

}

const BannerItem = ({ title, value }) => {
  return <div
    className={styles.banner_item}
  // style={{
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   padding: "8px"
  // }}
  >
    <div>{title}</div><br />
    <div style={{
      marginTop: 3
    }}>{value}</div>
  </div >
}

const BannerComponent = (props) => {
  const items = [];
  for (const [index, value] of props.items.entries()) {
    items.push(<BannerItem key={index} title={value.title} value={value.value} ></BannerItem>)
  }

  return <div
    className={styles.video_banner}
  // style={{
  //   position: "absolute",
  //   width: "100%",
  //   backgroundColor: "#512A2A75",
  //   height: "5.4em",
  //   top: 0,
  //   left: 0,
  //   display: "flex",
  //   flexDirection: "row",
  // }}
  >
    {items}
  </div >;
}