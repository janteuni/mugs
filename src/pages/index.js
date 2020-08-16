import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  const style = {
    fontFamily: "Alata",
    textAlign: "center",
  }
  return (
    <div style={style}>
      <h1>Mugs Collection</h1>
      {data.allImageSharp.edges.map((el, i) => (
        <Img
          fixed={el.node.fixed}
          key={i}
        />
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allImageSharp {
    edges {
      node {
          fixed(width: 480, height: 480) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`


export default Home
