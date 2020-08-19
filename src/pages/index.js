import React, { useState } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const Home = ({ data }) => {
  const [step, setStep] = useState(0)
  const [imgs, setImgs] = useState([...data.allImageSharp.edges])

  const container = {
    fontFamily: "Alata",
    textAlign: "center",
    maxWidth: "1000px",
    marginLeft: "auto",
    marginRight: "auto",
  }

  const imgContainer = {
    position: "relative",
    overflow: "hidden",
    display: "inline-block",
    width: "430px",
    height: "430px",
  }

  const h2 = {
    color: "#a7a4a4",
  }

  const vote = name => {
    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: "Image",
      // string - required - Type of interaction (e.g. 'play')
      action: "Click",
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: "Vote",
      // number - optional - Numeric value associated with the event. (e.g. A product ID)
      value: parseInt(name.split(".")[0]),
    })
    setStep(step + 1)
  }

  return (
    <div style={container}>
      <h1>Mugs Collection</h1>
      {step === 0 && (
        <div>
          <h2 style={h2}>
            {
              "Votez pour votre tasse préférée en cliquant sur l'image pour la sélectionner.<br />Les tasses ayant recus le plus de vote seront fabriquées en série et vous pourrez les commander en ligne :)"
            }
          </h2>
          <button
            onClick={() => {
              setImgs(shuffle(imgs))
              setStep(step + 1)
            }}
          >
            Go
          </button>
        </div>
      )}
      {step > 0 &&
        imgs
          .filter((el, i) => i >= (step - 1) * 4 && i < step * 4)
          .map((el, i) => (
            <div
              key={i}
              style={imgContainer}
              onClick={() => vote(el.node.fixed.src.split("/").pop())}
              role="button"
              tabIndex={0}
            >
              <Img fixed={el.node.fixed} />
            </div>
          ))}
    </div>
  )
}

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fixed(width: 430, height: 430) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

export default Home
