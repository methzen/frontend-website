import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"
import getThreeNewestPosts from "../api/getThreeNewestPosts.js"
import GoogleAnalytics from "../components/googleAnalytics.js"

export default class extends Component {
  static async getInitialProps () {
    const apiResult = await getThreeNewestPosts()
  
    return {
      posts: apiResult && apiResult.posts
    }
  }

  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Mouhamadou Dia"
          metaDescription="I'm an engineer, software developer and data scientist"
        />
        <GoogleAnalytics />
        <Header />
        <div className="homepage-container">
          <div className="homepage-introduction">
            <h1>Hi, I'm Mouhamadou Dia. I help people solve problems and create value.</h1>
            <p>Since 2015, I have been helping technological companies implement numerical methods and 
              strategies that help them make better decisions and solve complexe and challenging industrial problems.
              I have worked with companies like General Electric, Alstom, EDF, Edvance, Framatome...</p>
          </div>
          <div className="homepage-latest-blog-posts">
            <h2>
              Latest Blog Posts
              <a className="homepage-latest-blog-posts-view-all" href="/blog">View all</a>
            </h2>
            <div className="homepage-latest-blog-posts-list">

            {
                this.props.posts ?
                this.props.posts.map((post, index) => {
                  return (
                    <a key={index} href={`/blog/${post.urlTitle}`}>
                      <div className="homepage-latest-blog-post">
                        <div className="homepage-latest-thumbnail">
                          <img src={post.thumbnailImageUrl} />
                        </div>
                        <div className="homepage-latest-blog-post-title">
                          <h3>{post.title}</h3>
                        </div>
                      </div>
                    </a>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="homepage-projects">
            <h2>Lastest Presentations</h2>
            <div className="homepage-projects-list">
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/discourse/discourse">
                    <div className="homepage-project-icon">🇺🇸</div>
                    <div className="homepage-project-title">New York</div>
                  </a>
                </h3>
                <p>World Congress of Computational Mechanics (WCCM).</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="http://www.wccm2018.org/">View</a>
                </div>
              </div>
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/nmajor25/seconds-converter">
                    <div className="homepage-project-icon">🇫🇷</div>
                    <div className="homepage-project-title">Giens </div>
                  </a>
                </h3>
                <p>Colloque National en Calcul des Structures (CSMA).</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="https://csma.asso.univ-lorraine.fr/congres-de-giens/">View</a>
                </div>
              </div>
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/showdownjs/showdown">
                    <div className="homepage-project-icon">🇪🇸</div>
                    <div className="homepage-project-title">Barcelone</div>
                  </a>
                </h3>
                <p>International Conference on Computational Plasticity (COMPLAS).</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="https://upcommons.upc.edu/handle/2117/181163">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}