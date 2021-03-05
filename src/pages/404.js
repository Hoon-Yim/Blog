/* eslint-disable react/prop-types */
import React from "react"

import { Link, graphql } from "gatsby"

const NotFoundPage = ({ data }) => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h4>Your web page could not be found. All pages on this site are:</h4>
        {data.allSitePage.edges.map(page => (
          <Link to={page.node.path} href={page.node.path} key={page.node.path}>
            <li>{page.node.path}</li>
          </Link>
        ))}
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query getAllPages {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`

export default NotFoundPage
