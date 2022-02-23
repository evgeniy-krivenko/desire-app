import React from 'react'
import Layout from '../components/Layout/Layout'
import Map from '../components/Map/Map'
import { graphql } from 'gatsby'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import Contact from '../components/Contact/Contact'
import ImageCollection from '../components/ImageCollection/ImageCollection'
import ContactImageCollection from '../components/ContactImageCollection/ContactImageCollection'

const contact = ({ data: { dataJson } }) => {
  const {
    breadcrumbs,
    title,
    newCollectionPlates,
    ...otherProps
  } = dataJson.contactPage
  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      <Map />
      <Contact {...otherProps} />
      <ContactImageCollection data={newCollectionPlates} />
    </Layout>
  )
}

export const galleryQuery = graphql`
      {
        dataJson(contactPage: {title: {eq: "Contact"}}) {
        contactPage {
        breadcrumbs {
          slug
            title
          }
      title
      h3
      phone
      email
      addressSecond
      addressFirst
      aboutUs
      newCollectionPlates {
        title
        image {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      socialItems {
        slug
        img {
          publicURL
        }
      }

      }
    }
  }

      `

export default contact
