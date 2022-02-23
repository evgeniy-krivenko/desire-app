import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import Gallery from '../components/Gallery/Gallery'
import Layout from '../components/Layout/Layout'
import { graphql } from 'gatsby'

const gallery = ({ data }) => {
  const {
    title,
    galleryPage,
    breadcrumbs
  } = data.dataJson

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      <Gallery data={galleryPage} />
    </Layout>
  )
}

export const galleryQuery = graphql`
  {
    dataJson(title: {eq: "Gallery"}) {
      title
      galleryPage {
        title
        images {
          id
          childImageSharp {
            gatsbyImageData(width: 812)
          }
        }
      }
      breadcrumbs {
        title
        slug
      }
    }
  }
`


export default gallery
