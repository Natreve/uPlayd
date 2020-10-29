import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload } from "@fortawesome/free-solid-svg-icons"
import css from "./css.module.scss"
const UploadButton = props => {
  return (
    <label
      htmlFor="uploadButton"
      className={css.button}
      tabIndex="0"
      onClick={e => e.stopPropagation()}
    >
      <FontAwesomeIcon icon={faUpload} /> <span>UPLOAD</span>
      <input
        type="file"
        accept="video/*"
        id="uploadButton"
        capture="environment"
        onClick={element => {
          element.target.addEventListener("change", e => {
            props.onUpload(e.target.files[0])
            // let name = e.target.files[0].name
            // let video = URL.createObjectURL(e.target.files[0])

            // props.onUpload({
            //   name: name,
            //   source: video,
            //   raw: e.target.files[0],
            // })
          })
        }}
      />
    </label>
  )
}
export default UploadButton
