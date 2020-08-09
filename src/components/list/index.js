import React, { useEffect, useState } from "react"
// import css from "./css.module.scss"
import { List, arrayMove } from "react-movable"
const DraggableList = props => {
  const [items, setItems] = useState(props.videos)
  // console.log(props.videos)

  return (
    <List
      values={props.videos}
      onChange={({ oldIndex, newIndex }) => {
        let moved = arrayMove(props.videos, oldIndex, newIndex)
        props.onChange(moved)
        // setItems(moved)
      }}
      renderList={({ children, props, isDragged }) => (
        <table>
          <thead>
            <tr>
              <th>Video</th>
            </tr>
          </thead>
          <tbody {...props}>{children}</tbody>
        </table>
      )}
      renderItem={({ value, props, isDragged, isSlected }) => {
        const row = (
          <tr {...props}>
            <td data-source={value.source}>{value.name}</td>
          </tr>
        )
        return isDragged ? (
          <table style={{ ...props.style, borderSpacing: 0 }}>
            <tbody>{row}</tbody>
          </table>
        ) : (
          row
        )
      }}
    />
  )
}

export { DraggableList }
