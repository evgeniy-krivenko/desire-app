import { graphql } from 'gatsby';
import React from 'react';
import About from '../components/About/About';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ImageCollection from '../components/ImageCollection/ImageCollection';
import Layout from '../components/Layout/Layout';

const about = ({ data: { dataJson } }) => {

    const { breadcrumbs, aboutCollectionPlates, ...otherProps } = dataJson;

    return (
        <Layout>
            <Breadcrumbs items={breadcrumbs} />
            <About {...otherProps} />
            <ImageCollection data={aboutCollectionPlates} />
        </Layout>
    )
}

export const queryAbout = graphql`
    query AboutPageQuery {
        dataJson(title: {eq: "About"}) {
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
            partnersImg {
                publicURL
            }
            slug
            breadcrumbs {
                title
                slug
            }
            aboutCollectionPlates {
                title
                text
                image {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
            }
        }
    }
`

export default about
