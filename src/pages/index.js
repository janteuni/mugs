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

  const imgContainer = {
    position: "relative",
    overflow: "hidden",
    display: "inline-block",
    maxWidth: "430px",
    maxHeight: "430px",
    width: "100%",
  }

  const h2 = {
    color: "#a7a4a4",
    maxWidth: "720px",
    padding: "12px",
  }

  const h1 = {
    marginTop: "12px",
    padding: "12px",
  }

  const vote = name => {
    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: "Image",
      // string - required - Type of interaction (e.g. 'play')
      action: "Click",
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: name.split(".")[0],
    })
    setStep(step + 1)
  }

  return (
    <div className="container full-height flex flex-column">
      <h1 style={h1}>Mugs Collection</h1>
      {step === 0 && (
        <div className="flex flex-column flex-grow flex-center align-center">
          <h2 style={h2}>
            {"Votez pour votre tasse préférée en cliquant sur l'image."}
            <br />
            {
              "Les tasses ayant reçus le plus de votes seront fabriquées en série et vous pourrez les commander en ligne :) "
            }
          </h2>
          <button
            onClick={() => {
              setImgs(shuffle(imgs))
              setStep(step + 1)
            }}
          >
            {"C'est parti !"}
          </button>
        </div>
      )}
      {step > 0 && step < 11 && (
        <div>
          {imgs
            .filter((el, i) => i >= (step - 1) * 4 && i < step * 4)
            .map((el, i) => (
              <div
                key={i}
                style={imgContainer}
                onClick={() => vote(el.node.fluid.src.split("/").pop())}
                role="button"
                tabIndex={0}
              >
                <Img fluid={el.node.fluid} />
              </div>
            ))}
        </div>
      )}
      {step === 11 && (
        <div className="flex flex-column flex-grow flex-center align-center">
          <h2 style={h2}>
            {"Merci beaucoup :)"}
            <br />
            {
              "Pour être tenu au courant lorsque les tasses seront disponibles, inscrivez-vous avec votre email ici:"
            }
          </h2>
          <iframe
            src="https://d8cb2fc7.sibforms.com/serve/MUIEAMVOJ6SgMjZISqkBOqsWeI4wYLjqQnt_xUHejO0-yEqpRFXt9In54eZxa6iU9Rdu7MTSLbKAbzlBM-MQt979AdFMYOt6Vnf9tikb5O0PIOjLu3I1Q96dWB6Q8pFvDaC-xLwp13BgSsqccaELRb4aWyJCzH48mMJReOT1TyE4omLD-vXIcNZdovB5CnbLqGfKDHeAKmDcoiDc"
            frameborder="0"
            scrolling="auto"
            allowfullscreen
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "100%",
            }}
          ></iframe>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query {
    allImageSharp {
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

export default Home
