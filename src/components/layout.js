import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        padding: 0px 50px;
      `}
    >
      <header
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Link to="/">
          <span
            css={css`
              color: black;
              font-size: 30px;
            `}
          >
            WareHouse
          </span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </header>
      {children}
    </div>
  )
}
