import videojs from 'video.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {faFastBackward} from "@fortawesome/free-solid-svg-icons"

export default class StepBackFast extends videojs.getComponent('Button') {
  constructor(player, options) {
    super(player, options)

    const name = "stepBackwardFast";

    this.el().innerHTML = `
    <div id="${name}" class="${name}"></div>
  `;

    player.ready(function () {
      console.log(this.el().firstChild);
      ReactDOM.render(
        <FontAwesomeIcon icon={faFastBackward} />
        ,
        document.getElementById(name)
      );
    });

    this.on("dispose", () => {
      ReactDOM.unmountComponentAtNode(this.el())
    });

    this.on('click', () => {
      console.log('+ 10')
      player.controlBar.progressControl.seekBar.stepBack()

    })
  }

}