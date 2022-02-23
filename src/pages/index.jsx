import * as React from "react"
import '../styles/index.scss'
import ImageCollection from '../components/ImageCollection/ImageCollection'
import TopSlider from '../components/TopSlider/TopSlider'
import WorksPath from '../components/WorksPath/WorksPath'
import Gallery from '../components/Gallery/Gallery'
import { graphql } from 'gatsby'
import BlogBox from '../components/BlogBox/BlogBox'
import Layout from '../components/Layout/Layout'


// markup
const IndexPage = ({ data }) => {

  const {
    newCollectionTitle,
    newCollectionText,
    newCollectionPlates,
    gallery,
    blogTitle,
    blogPosts,
  } = data.dataJson;

  return (
    <Layout>
      <TopSlider />
      <section className="new__collection">
        <div className="container-fluid">
          <h3 className="new__collection-title">
            {newCollectionTitle}
          </h3>
          <p className="new__collection-text">
            {newCollectionText}
          </p>
          <ImageCollection data={newCollectionPlates} />
        </div>
      </section>
      <section className="decor">
        <div className="container">
          <h2 className="decor__title">
            Aesthetic
            ethical drinking
          </h2>
          <p className="decor__text">Deep v you probably haven't heard of them banh mi synth actually affogato. Artlyft ethical the one drinking vinegar austint</p>
        </div>
      </section>
      <WorksPath />
      <Gallery data={gallery} />
      <BlogBox title={blogTitle} posts={blogPosts} />
    </Layout>
  )
}

export const query = graphql`
  {
    dataJson(title: {eq: "Home"}) {
      slug
      title
      newCollectionTitle
      newCollectionText
      newCollectionPlates {
        title
        text
        image {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      blogTitle
      blogPosts {
        author
        category
        date
        title
        url
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      gallery {
        title
        images {
          id
          childImageSharp {
              gatsbyImageData(width: 812)
            }
        }
      }
    }
  }
`

export default IndexPage
