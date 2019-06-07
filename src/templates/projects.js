import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import Head from '../components/head'
import carouselStyles from '../components/carousel.module.scss'
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: {eq: $slug}){
      name
      description
      url
      github
      writeup {
        json
      }
      screenshot {
        fluid {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
  }
`

const Project = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      }
    }
  }
  return (
    <Layout>
      <Head title={props.data.contentfulProjects.name} />
      <h1>{props.data.contentfulProjects.name}</h1>
      <h5>{props.data.contentfulProjects.description}</h5>
      <div className={carouselStyles.buttonbox}>
        <a href={props.data.contentfulProjects.url} target="_blank" rel="noopener noreferrer"><button>Live Site</button></a> 
        <a href={props.data.contentfulProjects.github} target="_blank" rel="noopener noreferrer"><button>Github Repo</button></a> 
      </div>
      <Img alt={props.data.contentfulProjects.name} fluid={props.data.contentfulProjects.screenshot.fluid} />
      {documentToReactComponents(props.data.contentfulProjects.writeup.json, options)}
      <div className={carouselStyles.listbutton}>
        <Link to='/projects'>
          <button>Complete Project List</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Project