import React, { useState } from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Seasons from "./Seasons"
import ReactPlayer from 'react-player'
import "./index.css";
import Results from "./Results"

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
      <div className="dashboard-wrapper">
        <div className="db-row-1">
          <Seasons />
          <ReactPlayer url='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
            width="100%" height="50vh" controls={true} />
        </div>
        <div className="db-row-2">
          <Results/>
        </div>
      </div>
    </Layout>
  )
  // function onClick(file) {
  //   console.log(file.source)
  //   video.current.changeSource(file.source)
  // }
}

export default VideoEditor
