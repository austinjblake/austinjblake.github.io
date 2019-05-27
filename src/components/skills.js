import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import skillsStyles from './skills.module.scss'

const SkillsBox = () => {
  const data = useStaticQuery(graphql`
  query {
    frontData: allContentfulSkillsBox (
      filter: {
      area: {eq: "front"}
    }
      sort: {fields: [order], order: ASC}
    )
      {
      edges {
        node {
          slug
          text
          area
          order
          icon {
            file {
              url
            }
          }
        }
      }
    }
    backData: allContentfulSkillsBox (
      filter: {
      area: {eq: "back"}
    }
      sort: {fields: [order], order: ASC}
    )
      {
      edges {
        node {
          slug
          text
          area
          order
          icon {
            file {
              url
            }
          }
        }
      }
    }
  }
  `)

  return(
    <div className={skillsStyles.skillsSection}>
      <h2>Some technologies I use</h2>
      <div className={skillsStyles.container}>
        <h2>Front End</h2>
        <div id="frontEnd" className={skillsStyles.icons}>
          {data.frontData.edges.map((edge) => {
            return (
              <div className={skillsStyles.test}>
                <img alt={edge.node.slug} src={edge.node.icon.file.url} />
                <p id="text">{edge.node.text}</p>
              </div>
            )
          })}
        </div>
        <h2>Back End</h2>
        <div id="backEnd" className={skillsStyles.icons}>
          {data.backData.edges.map((edge) => {
            return (
              <div className={skillsStyles.test}>
                <img alt={edge.node.slug} src={edge.node.icon.file.url} />
                <p id="text">{edge.node.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div> 
  )
}

export default SkillsBox