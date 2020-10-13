import React, { useEffect, useState } from "react"
import css from "./css.module.scss"

const Item = props => {
  return (
    <div
      className={css.listItem}
      sortable-item="sortable-item"
      onClick={e => props.onClick(e)}
    >
      <div className={css.listItemContent}>
        <div className={css.listItemTitle}>{props.title}</div>
        <div className={css.listItemDescription}>{props.description}</div>
      </div>
      <div
        className={css.listItemHandle}
        sortable-handle="sortable-handle"
      ></div>
    </div>
  )
}

const SortableList = props => {
  class Sortable {
    constructor(list, options) {
      this.list = typeof list === "string" ? document.querySelector(list) : list

      this.items = Array.from(this.list.children)
      this.animation = false

      this.options = Object.assign(
        {
          animationSpeed: 200,
          animationEasing: "ease-out",
        },
        options || {}
      )

      this.dragStart = this.dragStart.bind(this)
      this.dragMove = this.dragMove.bind(this)
      this.dragEnd = this.dragEnd.bind(this)

      this.list.addEventListener("touchstart", this.dragStart, false)
      this.list.addEventListener("mousedown", this.dragStart, false)
    }

    dragStart(e) {
      if (this.animation) return
      if (e.type === "mousedown" && e.which !== 1) return
      if (e.type === "touchstart" && e.touches.length > 1) return

      this.handle = null

      let el = e.target
      while (el) {
        if (el.hasAttribute("sortable-handle")) this.handle = el
        if (el.hasAttribute("sortable-item")) this.item = el
        if (el.hasAttribute("sortable-list")) break
        el = el.parentElement
      }

      if (!this.handle) return

      this.list.style.position = "relative"
      this.list.style.height = this.list.offsetHeight + "px"

      this.item.classList.add(css.isDragging)

      this.itemHeight = this.items[1]?.offsetTop
      this.listHeight = this.list.offsetHeight
      this.startTouchY = this.getDragY(e)
      this.startTop = this.item.offsetTop

      const offsetsTop = this.items.map(item => item.offsetTop)

      this.items.forEach((item, index) => {
        item.style.position = "absolute"
        item.style.top = 0
        item.style.left = 0
        item.style.width = "100%"
        item.style.transform = `translateY(${offsetsTop[index]}px)`
        item.style.zIndex = item === this.item ? 2 : 1
      })

      setTimeout(() => {
        this.items.forEach(item => {
          if (this.item === item) return
          item.style.transition = `transform ${this.options.animationSpeed}ms ${this.options.animationEasing}`
        })
      })

      this.positions = this.items.map((item, index) => index)
      this.position = Math.round(
        (this.startTop / this.listHeight) * this.items.length
      )

      this.touch = e.type === "touchstart"
      window.addEventListener(
        this.touch ? "touchmove" : "mousemove",
        this.dragMove,
        { passive: false }
      )
      window.addEventListener(
        this.touch ? "touchend" : "mouseup",
        this.dragEnd,
        false
      )
    }

    dragMove(e) {
      if (this.animation) return

      const top = this.startTop + this.getDragY(e) - this.startTouchY
      const newPosition = Math.round(
        (top / this.listHeight) * this.items.length
      )

      this.item.style.transform = `translateY(${top}px)`

      this.positions.forEach(index => {
        if (index === this.position || index != newPosition) return
        this.swapElements(this.positions, this.position, index)
        this.position = index
      })

      this.items.forEach((item, index) => {
        if (item === this.item) return
        item.style.transform = `translateY(${
          this.positions.indexOf(index) * this.itemHeight
        }px)`
      })

      e.preventDefault()
    }

    dragEnd(e) {
      this.animation = true

      this.item.style.transition = `all ${this.options.animationSpeed}ms ${this.options.animationEasing}`
      this.item.style.transform = `translateY(${
        this.position * this.itemHeight
      }px)`

      this.item.classList.remove(css.isDragging)

      setTimeout(() => {
        this.list.style.position = ""
        this.list.style.height = ""

        this.items.forEach(item => {
          item.style.top = ""
          item.style.left = ""
          item.style.right = ""
          item.style.position = ""
          item.style.transform = ""
          item.style.transition = ""
          item.style.width = ""
          item.style.zIndex = ""
        })

        this.positions.map(i => this.list.appendChild(this.items[i]))
        this.items = Array.from(this.list.children)

        this.animation = false
      }, this.options.animationSpeed)

      window.removeEventListener(
        this.touch ? "touchmove" : "mousemove",
        this.dragMove,
        { passive: false }
      )
      window.removeEventListener(
        this.touch ? "touchend" : "mouseup",
        this.dragEnd,
        false
      )
    }

    swapElements(array, a, b) {
      const temp = array[a]
      array[a] = array[b]
      array[b] = temp
    }

    getDragY(e) {
      return e.touches ? (e.touches[0] || e.changedTouches[0]).pageY : e.pageY
    }
  }
  useEffect(() => {
    const sortable = new Sortable(`.${css.list}`)
  })
  console.log("rendered")
  return (
    <div className={css.list} sortable-list="sortable-list">
      {props.children}
    </div>
  )
}

export { SortableList, Item }
