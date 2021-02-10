import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO/"
import TextBlock from "../components/TextBlock"
import Card from '../components/Card'

export const query = graphql` 
  query MyQuery {
    allSanityPost {
      edges {
        node {
          _rawBody
          title
          publishedAt
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }    
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <TextBlock body={'Hey there, I write about my adventures through the digital world!'}/>
    <ul className='flex flex-wrap'>
      {data.allSanityPost.edges.map(({ node }) => (
        <Card
          image={node.mainImage} title={node.title} />
      ))}
    </ul>
  </Layout>
)

export default IndexPage
