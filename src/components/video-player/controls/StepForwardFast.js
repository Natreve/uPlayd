import videojs from 'video.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faFastForward,
} from "@fortawesome/free-solid-svg-icons"

export default class StepForwardFast extends videojs.getComponent('Button') {
  constructor(player, options) {
    super(player, options)

    const name = "stepForwardFast";

    this.el().innerHTML = `
    <div id="${name}" class="${name}"></div>
    `;

    player.ready(function () {
      ReactDOM.render(
        <FontAwesomeIcon icon={faFastForward} />
        ,
        document.getElementById(name)
      );
    });

    this.on("dispose", () => {
      ReactDOM.unmountComponentAtNode(this.el())
    });

    this.on('click', () => {
      player.controlBar.progressControl.seekBar.stepForward()

    })
  }

}