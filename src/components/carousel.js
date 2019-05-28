import React from 'react';
import "./carouselcss.css";
import { Carousel } from 'react-responsive-carousel';
import { graphql, useStaticQuery } from 'gatsby'
import carouselStyles from './carousel.module.scss'



const DemoCarousel = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulProjects (
      sort: {fields: [rank], order: ASC }
    ) {
      edges {
        node {
          name 
          rank
          url
          github
          writeupurl
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
                <div className={carouselStyles.slide}>
                  <img alt={edge.node.name} src={edge.node.screenshot.file.url} />
                  <p>{edge.node.name}</p>
                  <div className={carouselStyles.buttonbox}>
                    <a href={edge.node.url} target="_blank" rel="noopener noreferrer"><button>Live Site</button></a> 
                    <a href={edge.node.github} target="_blank" rel="noopener noreferrer"><button>Github Repo</button></a> 
                    <a href={edge.node.writeupurl} target="_blank" rel="noopener noreferrer"><button>Full Writeup</button></a>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      );
};

export default DemoCarousel
