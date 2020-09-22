import React, { useState } from "react"

import Layout from "components/layout"
import VideoPlayer from "components/video-player"
import SEO from "components/seo"
import { SortableList, Item } from "components/list"
import Button from "components/buttons"
const IndexPage = () => {
  const video = React.createRef()
  const [sources, addSource] = useState([])
  return (
    <Layout>
      <SEO title="Home" />
      <Button onUpload={file => onUpload(file)} />
      <VideoPlayer ref={video} />
      <SortableList>
        {sources?.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            description={item.description}
            onClick={e => video.current.changeSource(item.source)}
          />
        ))}
      </SortableList>
    </Layout>
  )
  function onClick(file) {
    console.log(file.source)
    video.current.changeSource(file.source)
  }
  function onUpload(file) {
    console.log(file)
    addSource([
      ...sources,
      {
        title: file.name,
        description: "Aenean aliquam molestie urna, vel aliquam.",
        source: file.source,
      },
    ])

    // video.current.changeSource(file.source)
  }
}

export default IndexPage
