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
  const { allMainBlogBoxJson: { nodes } } = data;

  return (
    <Layout>
      <TopSlider />
      <section className="new__collection">
        <div className="container-fluid">
          <h3 className="new__collection-title">
            Furniture new collection
          </h3>
          <p className="new__collection-text">
            Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
          </p>
          <ImageCollection />
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
      <Gallery />
      <BlogBox posts={nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allMainBlogBoxJson {
      nodes {
        title
        id
        author
        category
        date
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default IndexPage
