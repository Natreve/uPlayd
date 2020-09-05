import videojs from 'video.js';

export default class PlayButton extends videojs.getComponent('PlayToggle') {
  constructor(player, options) {
    super(player, options);
    this.player = player
  }
}


