import React, { useState } from "react"

import Layout from "components/layout"
import VideoPlayer from "components/video-player"
import SEO from "components/seo"
import { DraggableList } from "components/list"
import Button from "components/buttons"
const IndexPage = () => {
  const [sources, addSource] = useState([])
  const [player, setPlayer] = useState(null)

  console.log(sources)

  return (
    <Layout>
      <SEO title="Home" />
      <Button onUpload={file => onUpload(file)} />
      <VideoPlayer
        player={_player => {
          if (!player) setPlayer(_player)
        }}
      />
      <DraggableList videos={sources} onChange={moved => addSource(moved)} />
    </Layout>
  )
  function onUpload(video) {
    addSource([...sources, video])
    player.changeSource(video.source)
  }
  // function onChange({ oldIndex, newIndex }) {}
}

export default IndexPage
