import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects (
        sort: {
          fields: rank,
          order: ASC
        }
      ){
        edges {
          node {
            name
            slug
            description
          }
        }
      }
    }
  `)

  return (
    <Layout>
    <Head title="Projects" />
      <h1>Projects</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulProjects.edges.map((edge) => {
          return (
            <li key={edge.node.slug} className={blogStyles.post}>
              <Link to={`/projects/${edge.node.slug}`}> 
                <h2>{edge.node.name}</h2>
                <p>{edge.node.description}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ProjectsPage