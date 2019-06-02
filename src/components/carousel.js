import React from 'react';
import "./carouselcss.css";
import { Carousel } from 'react-responsive-carousel';
import { Link, graphql, useStaticQuery } from 'gatsby'
import carouselStyles from './carousel.module.scss'



const ProjectCarousel = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulProjects (
      sort: {fields: [rank], order: ASC }
      limit: 4
    ) {
      edges {
        node {
          name 
          rank
          url
          github
          slug
          description
          screenshot {
            file {
              url
            }
          }
        }
      }
    }
  }
`)
      return (
        <div className={carouselStyles.container}>
          <h1>Portfolio Projects</h1>
          <Carousel className={carouselStyles.carousel} showThumbs={false} useKeyboardArrows={true} infiniteLoop={true} showStatus={true} showIndicators={false}>
            {data.allContentfulProjects.edges.map((edge) => {
              return (
                <div key={edge.node.slug} className={carouselStyles.slide}>
                  <div className={carouselStyles.imagecontainer}>
                    <div className={carouselStyles.overlay}>
                      <div className={carouselStyles.description}>{edge.node.description}</div>
                    </div>
                    <img alt={edge.node.name} src={edge.node.screenshot.file.url} />
                  </div>
                  <p>{edge.node.name}</p>
                  <div className={carouselStyles.buttonbox}>
                    <a href={edge.node.url} target="_blank" rel="noopener noreferrer"><button>Live Site</button></a> 
                    <a href={edge.node.github} target="_blank" rel="noopener noreferrer"><button>Github Repo</button></a> 
                    <Link to={`/projects/${edge.node.slug}`}><button>Full Writeup</button></Link>
                  </div>
                </div>
              )
            })}
          </Carousel>
          <div className={carouselStyles.listbutton}>
            <Link to='/projects'>
              <button>Complete Project List</button>
            </Link>
          </div>
        </div>
      );
};

export default ProjectCarousel
