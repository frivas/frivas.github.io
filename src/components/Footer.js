import React from "react"
import foorterStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={foorterStyles.footer}>
      <a
        href="https://mobile.twitter.com/franciscorivash"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter
      </a>{" "}
      &bull;{" "}
      <a
        href="https://github.com/frivas"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
    </footer>
  )
}

export default Footer
