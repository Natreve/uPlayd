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
      <VideoPlayer
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        banner={[
          { title: "PLAY #", value: "4" },
          { title: "ODK", value: "K" },
          { title: "QTR", value: "1" },
          { title: "DN", value: "0" },
          { title: "YARD LN", value: "40" },
          { title: "HASH", value: "M" },
          { title: "PLAY TYPE", value: "KO Rec" },
          { title: "RESULT", value: "Return" },
        ]}
      />
      {/* <DraggableList videos={sources} onChange={moved => addSource(moved)} /> */}
    </Layout>
  )
}

export default IndexPage
