import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faFastForward,
  faFastBackward,
  faVolumeUp,
  faClosedCaptioning,
  faExpand,
} from "@fortawesome/free-solid-svg-icons"
import css from "./css.module.scss"

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props)
    this.video = React.createRef()
  }
  state = {
    paused: faPlay,
    player: null,
    progress: 0,
    timestamp: 0,
  }
  togglePlayPause() {
    const { player } = this.state
    if (this.video.current.paused) {
      player.play()
      this.setState({ paused: faPause })
    } else {
      player.pause()
      this.setState({ paused: faPlay })
    }
  }
  scrub(e) {
    const video = this.video.current
    const timeline = document.querySelector(`.${css.timeline}`)
    const scrubTime =
      (e.nativeEvent.offsetX / timeline.offsetWidth) * video.duration
    video.currentTime = scrubTime
  }
  skip(seconds) {
    console.log(seconds)
    const video = this.video.current
    video.currentTime += seconds
  }
  componentDidMount() {
    this.setState({ player: this.video.current })
    this.video.current.addEventListener("timeupdate", () => {
      const video = this.video.current
      this.setState({ progress: video.currentTime / video.duration })
    })
  }
  render() {
    const { paused, progress } = this.state
    return (
      <div className={css.player}>
        <video className={css.video} ref={this.video}>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"></source>
          <track kind="captions"></track>
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className={css.controls}>
          <div className={css.timeStamp}></div>
          <div className={css.buttons}>
            <button
              className={css.skipBackwards}
              onClick={() => this.skip(-10)}
            >
              <FontAwesomeIcon icon={faFastBackward} />
            </button>
            <button className={css.rewind}>
              <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className={css.play} onClick={() => this.togglePlayPause()}>
              <FontAwesomeIcon icon={paused} />
            </button>
            <button className={css.fastForward}>
              <FontAwesomeIcon icon={faForward} />
            </button>
            <button className={css.skip} onClick={() => this.skip(10)}>
              <FontAwesomeIcon icon={faFastForward} />
            </button>
          </div>
          <div className={css.timeline} onClick={e => this.scrub(e)}>
            <div
              className={css.progress}
              style={{ width: `${progress * 100}%` }}
            ></div>
            <div className={css.pointer}></div>
          </div>
          <div className={css.buttons}>
            <button className={css.volumn}>
              <FontAwesomeIcon icon={faVolumeUp} />
            </button>
            <button className={css.caption}>
              <FontAwesomeIcon icon={faClosedCaptioning} />
            </button>
            <button className={css.fullscreen}>
              <FontAwesomeIcon icon={faExpand} />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

// import React, { Component } from "react"
// import { Player, ControlBar, BigPlayButton } from "video-react"
// import "components/video-player/video-react.scss"
// import Button from "components/buttons"
// export default class VideoPlayer extends Component {
//   constructor(props, context) {
//     super(props, context)
//     this.state = {
//       source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
//     }
//     this.play = this.play.bind(this)
//     this.pause = this.pause.bind(this)
//     this.load = this.load.bind(this)
//     this.changeCurrentTime = this.changeCurrentTime.bind(this)
//     this.seek = this.seek.bind(this)
//     this.changeVolume = this.changeVolume.bind(this)
//     this.setMuted = this.setMuted(this)
//   }

//   componentDidMount() {
//     // subscribe state change
//     this.player.subscribeToStateChange(this.handleStateChange.bind(this))
//   }

//   setMuted(muted) {
//     return () => {
//       this.player.muted = muted
//     }
//   }

//   handleStateChange(state) {
//     // copy player state to this component's state
//     this.setState({
//       player: state,
//     })
//   }

//   play() {
//     this.player.play()
//   }

//   pause() {
//     this.player.pause()
//   }

//   load() {
//     this.player.load()
//   }

//   changeCurrentTime(seconds) {
//     return () => {
//       const { player } = this.player.getState()
//       this.player.seek(player.currentTime + seconds)
//     }
//   }

//   seek(seconds) {
//     return () => {
//       this.player.seek(seconds)
//     }
//   }

//   changePlaybackRateRate(steps) {
//     return () => {
//       const { player } = this.player.getState()
//       this.player.playbackRate = player.playbackRate + steps
//     }
//   }

//   changeVolume(steps) {
//     return () => {
//       const { player } = this.player.getState()
//       this.player.volume = player.volume + steps
//     }
//   }

//   changeSource(source) {
//     this.setState({
//       source: source,
//     })
//     this.player.load()
//   }
//   render() {
//     return (
//       <div >
//         <Player
//           ref={player => {
//             this.player = player
//             this.props.player(this)
//           }}
//         >
//           <source src={this.state.source}></source>
//           <BigPlayButton position="center" />
//           <ControlBar autoHide={false} />
//         </Player>
//       </div>
//     )
//   }
// }
