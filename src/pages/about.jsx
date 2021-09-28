import { graphql } from 'gatsby'
import React from 'react'
import About from '../components/About/About'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import Layout from '../components/Layout/Layout'

const about = ({ data: { pagesJson } }) => {

    return (
        <Layout>
            <Breadcrumbs items={pagesJson.breadcrumbs} />
            <About title={pagesJson.contentTitle} paragraphs={pagesJson.contentParagraphs} />
        </Layout>
    )
}

export const queryAbout = graphql`
    query AboutPageQuery {
        pagesJson(title: {eq: "About"}) {
            title
            contentTitle
            contentParagraphs
            detailTitle
            detailText
            slug
            h1
            breadcrumbs {
                title
                slug
            }
        }
    }
`

export default about
