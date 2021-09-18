import * as React from "react"
import Footer from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Layout } from '../components/Layout/Layout'
import TopSlider from '../components/TopSlider/TopSlider'


// markup
const IndexPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <>
        <main className="main">

          <TopSlider>
            <div className="div">sdfda</div>
            <div className="div">sdfda</div>
          </TopSlider>

        </main>
        <Footer />
      </>

    </div>
  )
}

export default IndexPage
