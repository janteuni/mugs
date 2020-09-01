import React, { useState } from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
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

  const getStarted = () => {
    let i = -1
    window.ga(function (tracker) {
      i = 1
    })
    setImgs(shuffle(imgs))
    setStep(i)
  }

  return (
    <div className="container full-height flex flex-column">
      <h1 style={h1}>Mugs Collection</h1>
      {step === -1 && (
        <div className="flex flex-column flex-grow flex-center align-center">
          <h2 style={h2}>
            Votez pour votre tasse préférée en cliquant sur une des quatres images qui apparaîtront.
            <br />
            Les tasses ayant reçus le plus de votes seront fabriquées en série
            et vous pourrez les commander en ligne :)
          </h2>
          <p style={{ paddingBottom: "12px" }}>
            Il semble que votre navigateur bloque Google Analytics.
            <br /> Veuillez autoriser Google Analytics pour pouvoir voter.
          </p>
          <button onClick={getStarted}>{"Je vote ➡️ "}</button>
        </div>
      )}
      {step === 0 && (
        <div className="flex flex-column flex-grow flex-center align-center">
          <h2 style={h2}>
            {"Votez pour votre tasse préférée en cliquant sur une des quatres images qui apparaîtront."}
            <br />
            {
              "Les tasses ayant reçu le plus de votes seront fabriquées en série et vous pourrez les commander en ligne :) "
            }
          </h2>
          <button onClick={getStarted}>{"Je vote ➡️ "}</button>
        </div>
      )}
      {step > 0 && step < 11 && (
        <div>
          <p style={{ textAlign: "right", paddingRight: "6px" }}>{step}/10</p>
          <div>
            {imgs
              .filter((el, i) => i >= (step - 1) * 4 && i < step * 4)
              .map((el, i) => (
                <div
                  key={i}
                  className="imgVote"
                  onClick={() => vote(el.node.fluid.src.split("/").pop())}
                  role="button"
                  tabIndex={0}
                >
                  <Img fluid={el.node.fluid} />
                </div>
              ))}
          </div>
        </div>
      )}
      {step === 11 && (
        <div className="flex flex-column flex-grow flex-center align-center">
          <h2 style={h2}>
            {"Merci beaucoup :)"}
            <br />
            {
              "Pour être tenu au courant lorsque les tasses seront disponibles, inscrivez-vous ici:"
            }
          </h2>
          <iframe
            src="https://d8cb2fc7.sibforms.com/serve/MUIEAMVOJ6SgMjZISqkBOqsWeI4wYLjqQnt_xUHejO0-yEqpRFXt9In54eZxa6iU9Rdu7MTSLbKAbzlBM-MQt979AdFMYOt6Vnf9tikb5O0PIOjLu3I1Q96dWB6Q8pFvDaC-xLwp13BgSsqccaELRb4aWyJCzH48mMJReOT1TyE4omLD-vXIcNZdovB5CnbLqGfKDHeAKmDcoiDc"
            title="newsletter"
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
      <Link to="/collection" style={{ padding: "12px" }}>
        Voir toute la collection
      </Link>
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
