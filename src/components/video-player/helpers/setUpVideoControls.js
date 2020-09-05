import videojs from 'video.js';
import StepBack from '../controls/StepBack';
import StepForward from '../controls/StepForward';
import StepBackFast from '../controls/StepBackFast';
import StepForwardFast from '../controls/StepForwardFast';
import PlayButton from '../controls/PlayButton';
import Banner from '../controls/Banner';

export const setUpVideoControls = (player, props) => {

  let uselessControls = [
    "playToggle",
    "currentTimeDisplay",
    "timeDivider",
    "durationDisplay",
    "liveDisplay",
    "seekToLive",
    "playbackRateMenuButton",
    "chaptersButton",
    "remainingTimeDisplay",
    "descriptionsButton",
    "audioTrackButton",
    "subsCapsButton",
    "volumePanel",
  ]

  uselessControls.forEach(
    item => player.controlBar.removeChild(item)
  )

  player.controlBar.progressControl.addChild("volumePanel");

  videojs.registerComponent('playButton', PlayButton)
  videojs.registerComponent('banner', Banner);
  videojs.registerComponent('stepBackFast', StepBackFast)
  videojs.registerComponent('stepBack', StepBack)
  videojs.registerComponent('stepForward', StepForward)
  videojs.registerComponent('stepForwardFast', StepForwardFast)


  player.controlBar.addChild("currentTimeDisplay", {}, 0);
  player.controlBar.addChild("remainingTimeDisplay", {}, 1);

  const banner = new Banner(player, props);
  player.addChild(banner, {});
  const stepBackFast = new StepBackFast(player)
  player.controlBar.stepBack = player.controlBar.addChild(stepBackFast, {}, 2)

  const stepBack = new StepBack(player)
  player.controlBar.stepBack = player.controlBar.addChild(stepBack, {}, 3)

  const playBtn = new PlayButton(player)
  player.controlBar.stepBack = player.controlBar.addChild(playBtn, {}, 4)

  const stepForward = new StepForward(player)
  player.controlBar.stepForward = player.controlBar.addChild(stepForward, {}, 5)

  const stepForwardFast = new StepForwardFast(player)
  player.controlBar.stepForward = player.controlBar.addChild(stepForwardFast, {}, 6)


}