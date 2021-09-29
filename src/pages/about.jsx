import { graphql } from 'gatsby';
import React from 'react';
import About from '../components/About/About';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Layout from '../components/Layout/Layout';

const about = ({ data: { pagesJson } }) => {

    const { breadcrumbs, ...otherProps } = pagesJson;

    return (
        <Layout>
            <Breadcrumbs items={breadcrumbs} />
            <About {...otherProps} />
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
            detailImg {
                childImageSharp {
                    gatsbyImageData
                }
            }
            detailOptions {
                optionPercent
                optionTitle
            }
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
