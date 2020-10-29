import React, { useState } from "react"

import Layout from "components/layout"
import VideoPlayer from "components/video-player"
import SEO from "components/seo"
import { SortableList, Item } from "components/list"
import Button from "components/buttons"
import Auth from "../../services/Auth"
const VideoEditor = ({ context }) => {
  const {
    state: { user },
  } = context
  const video = React.createRef()
  const [sources, addSource] = useState([])
  const onUpload = async file => {
    const apiKey = process.env.GATSBY_GOOGLE_DRIVE_API
    const resumableSessionURI = await getResumableSessionURI(file)

    uploadFile(resumableSessionURI, file)
    // addSource([
    //   ...sources,
    //   {
    //     title: file.name,
    //     description: "Aenean aliquam molestie urna, vel aliquam.",
    //     source: file.source,
    //   },
    // ])

    // video.current.changeSource(file.source)
  }
  const getResumableSessionURI = async file => {
    const url = `https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable`
    const options = {
      method: "post",
      accept: "application/json",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${user.token}`,
        "Content-Length": file.size,
      },
      body: JSON.stringify(file),
    }
    const response = await fetch(url, options)
    return response.headers.get("Location")
  }
  const uploadFile = async (url, file) => {
    const options = {
      method: "put",
      headers: {
        "Content-Length": file.size,
      },
      body: file,
    }
    fetch(url, options).then(response => console.log(response))
  }
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
      <button onClick={() => Auth.logout()}>Sign Out</button>
    </Layout>
  )
  // function onClick(file) {
  //   console.log(file.source)
  //   video.current.changeSource(file.source)
  // }
}

export default VideoEditor
