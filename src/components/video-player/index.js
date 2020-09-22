import React, { PureComponent } from "react"
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
export class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props)
    this.video = React.createRef()
    this.state = {
      source: null,
      paused: faPlay,
      player: null,
      progress: 0,
      timestamp: 0,
      duration: 0,
    }
  }
  changeSource(source) {
    this.setState({ source: source })
    this.video.current.load()
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
  scrub() {
    const video = this.video.current
    if (!video.duration) return
    const input = document.querySelector(`input[type="range"]`)

    input.style.background =
      "linear-gradient(to right, #FE3255 0%, #FE3255 " +
      input.value +
      "%, #fff " +
      input.value +
      "%, white 100%)"

    video.currentTime = video.duration * (input.value / 100)
    this.setState({ progress: input.value })
  }
  skip(seconds) {
    const video = this.video.current
    video.currentTime += seconds
  }
  seekTimeUpdate() {
    const video = this.video.current

    let progress = video.currentTime * (100 / video.duration)
    let currentMins = Math.floor(video.currentTime / 60)
    let currentSecs = Math.floor(video.currentTime - currentMins * 60)
    let durationMins = Math.floor(video.duration / 60)
    let durationSecs = Math.floor(video.duration - durationMins * 60)
    if (!durationMins) durationMins = 0
    if (!durationSecs) durationSecs = 0
    if (currentSecs < 10) currentSecs = `0${currentSecs}`
    if (durationSecs < 10) durationSecs = `0${durationSecs}`
    if (currentMins < 10) currentMins = `0${currentMins}`
    if (durationMins < 10) durationMins = `0${durationMins}`
    this.setState({
      progress: progress,
      timeStamp: `${currentMins}:${currentSecs}/${durationMins}:${durationSecs}`,
    })
  }
  componentDidMount() {
    this.setState({ player: this.video.current }, () => {
      this.video.current.load()
    })
    this.video.current.onloadedmetadata = () => {
      this.setState({ duration: this.video.current.duration })
      this.seekTimeUpdate()
    }
    this.video.current.addEventListener("timeupdate", () => {
      this.seekTimeUpdate()
    })
  }
  render() {
    const { paused, progress, source, timeStamp } = this.state

    return (
      <div className={css.player}>
        <video className={css.video} ref={this.video}>
          <source src={source}></source>
          <track kind="captions"></track>
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className={css.controls}>
          <div className={css.timeStamp}>{timeStamp}</div>
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
          <input
            type="range"
            min={0}
            max={100}
            value={progress || 0}
            step={1}
            style={{
              background:
                "linear-gradient(to right, #FE3255 0%, #FE3255 " +
                progress +
                "%, #fff " +
                progress +
                "%, white 100%)",
            }}
            onChange={e => this.scrub()}
          />

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
export default VideoPlayer
