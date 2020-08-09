import React, { Component } from "react"
import { Player, ControlBar, BigPlayButton } from "video-react"
import "components/video-player/video-react.scss"
import Button from "components/buttons"
export default class VideoPlayer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    }
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.load = this.load.bind(this)
    this.changeCurrentTime = this.changeCurrentTime.bind(this)
    this.seek = this.seek.bind(this)
    this.changeVolume = this.changeVolume.bind(this)
    this.setMuted = this.setMuted(this)
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this))
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted
    }
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state,
    })
  }

  play() {
    this.player.play()
  }

  pause() {
    this.player.pause()
  }

  load() {
    this.player.load()
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState()
      this.player.seek(player.currentTime + seconds)
    }
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds)
    }
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState()
      this.player.playbackRate = player.playbackRate + steps
    }
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState()
      this.player.volume = player.volume + steps
    }
  }

  changeSource(source) {
    this.setState({
      source: source,
    })
    this.player.load()
  }
  render() {
    return (
      <div >
        <Player
          ref={player => {
            this.player = player
            this.props.player(this)
          }}
        >
          <source src={this.state.source}></source>
          <BigPlayButton position="center" />
          <ControlBar autoHide={false} />
        </Player>
      </div>
    )
  }
}
