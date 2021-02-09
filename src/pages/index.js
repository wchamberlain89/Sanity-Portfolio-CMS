import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query ProjectQuery { 
    allSanityProject {
      edges {
        node {
          title
          slug {
            current
          }
          mainImage{
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          body {
            children {
              text
              marks
            }
            style
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>My Portfolio</h1>
    <ul className='flex flex-wrap'>
      {data.allSanityProject.edges.map(({ node: project }) => (
        <Link className='max-w-45 flex-grow m-5' key={project.slug.current} to={`/${project.slug.current}`}>
          <li>
            <h2>{project.title}</h2>
            <Image fluid={project.mainImage.asset.fluid} alt={project.title}/>
          </li>
        </Link>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
