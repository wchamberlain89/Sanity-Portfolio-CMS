import React from 'react'
import { graphql } from 'gatsby'

export const projectQuery = graphql`
    query($slug: String) {
        sanityProject(slug: { current: { eq: $slug }}) {
            title
        }
    }
`

const ProjectTemplate = ({ data }) => {
    return (
        <h1>{data.sanityProject.title}</h1>
    )
}

export default ProjectTemplate