import videojs from 'video.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faBackward,
} from "@fortawesome/free-solid-svg-icons"

export default class StepBack extends videojs.getComponent('Button') {
  constructor(player, options) {
    super(player, options)

    const name = "stepBackward";

    this.el().innerHTML = `
    <div id="${name}" class="${name}"></div>
  `;

    player.ready(function () {
      ReactDOM.render(
        <FontAwesomeIcon icon={faBackward} />
        ,
        document.getElementById(name)
      );
    });

    this.on("dispose", () => {
      ReactDOM.unmountComponentAtNode(this.el())
    });

    this.on('click', () => {
      player.controlBar.progressControl.seekBar.stepBack()

    })
  }

}