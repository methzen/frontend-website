import { Component } from "react"
import Prism from "prismjs"
import moment from "moment"

import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"
import "prismjs/components/prism-python.min.js"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetadata from "../../components/headMetadata.js"
import GoogleAnalytics from "../../components/googleAnalytics.js"

import getBlogPostByUrlTitle from "../../api/getBlogPostByUrlTitle.js"

export default class extends Component {
    componentDidMount(){
        Prism.highlightAll()
    }
    static async getInitialProps({ query }) {
      const apiResult= await getBlogPostByUrlTitle(query.title)
      return {
        post : apiResult && apiResult.post ,
        getDataError: apiResult && apiResult.getDataError,
        notFoundError : apiResult && apiResult.notFoundError 
      }
    }
    render () {
        return (
            <div className="layout-wrapper">
              <HeadMetadata
                title={this.props.post ? this.props.post.seoTitleTag : "Blog Post"}
                metaDescription={this.props.post && this.props.post.seoMetaDescription}
                />
                <GoogleAnalytics />
              <Header />
              <div className="blog-post-container">
                {/*
                <div className="blog-post-top-section">
                  <h1>Your Blog Post Title</h1>
                  <div className="blog-post-top-meta">
                    <span>5/1/2020</span>
                    <a className="blog-post-top-tag-btn" href="/blog/tags/javascript">
                      <span>javascript</span>
                    </a>
                    <a className="blog-post-top-tag-btn" href="/blog/tags/css">
                      <span>css</span>
                    </a>
                  </div>
                </div>
                */}
                <div className="blog-post-body-content">
                {
                   this.props.post && !this.props.getDataError && !this.props.notFoundError ?
                   <>
                     <div className="blog-post-top-section">
                       <h1>{this.props.post.title}</h1>
                       <div className="blog-post-top-meta">
                         <span>{moment.unix(this.props.post.dateTimestamp).format("MMMM Do, YYYY")}</span>
                         {
                           this.props.post.tags.map((tag, index) => {
                             return (
                               <a
                                 className="blog-post-top-tag-btn"
                                 key={index}
                                 href={`/blog/tags/${tag}`}
                               >
                                 <span>{tag}</span>
                               </a>
                             )
                           })
                         }
                       </div>
                     </div>
                     <div dangerouslySetInnerHTML={{__html: this.props.post.markdownContent}} className="blog-post-body-content"></div>
                   </> : 
                    <div className="blog-post-get-data-error-msg">
                      {
                     this.props.notFoundError ?
                     <span>Blog post not found.</span> :
                     <span>An error occurred.</span>
                      }
                    </div>
                  }                
                </div>
              </div>
              <Footer />
            </div>
        )
    }
}