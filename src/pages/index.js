import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO/"
import TextBlock from "../components/TextBlock"
import Card from '../components/Card'
import BlogPreviewCard from "../components/BlogPreviewCard"

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
          shortDescription
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
        <Card>
          <BlogPreviewCard 
            image={node.mainImage.asset.fluid.src} 
            title={node.title} 
            subtitle={node.publishedAt} 
            body={node.shortDescription} />
        </Card>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
