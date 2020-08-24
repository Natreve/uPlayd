import React from "react"

import Layout from "components/layout"
import VideoPlayer from "components/video-player"
import SEO from "components/seo"
// import { DraggableList } from "components/list"
// import Button from "components/buttons"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Button onUpload={file => onUpload(file)} /> */}
      <VideoPlayer />
      {/* <DraggableList videos={sources} onChange={moved => addSource(moved)} /> */}
    </Layout>
  )
}

export default IndexPage
