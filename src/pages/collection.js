import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

const Collection = ({ data }) => {
  const h1 = {
    marginTop: "12px",
    padding: "12px",
  }

  return (
    <div className="full-container full-height flex flex-column">
      <Link style={{ textDecoration: "none" }} to="/">
        <h1 style={h1}>Mugs Collection</h1>
      </Link>
      <div>
        {data.allImageSharp.edges.map((el, i) => (
          <div className="imgWrapper">
            <Img key={i} fluid={el.node.fluid} />
            <div className="number flex flex-center align-center">{i + 1}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allImageSharp(sort: {order: ASC, fields: [original___src]}) {
      edges {
        node {
          fluid(maxWidth: 430) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Collection
