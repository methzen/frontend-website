import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"
import GoogleAnalytics from "../components/googleAnalytics.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Contact | Mouhamadou"
          metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
        />
        <GoogleAnalytics />
        <Header />
        <div className="contact-container">
          <div className="contact-section">
            <h1>Contact</h1>
             <p>If you have any comments, ideas, critiques, or you just want to say hi, don’t hesitate to send me an email at <strong>diamohaminsa@gmail.com</strong>!</p>
          </div>
          {/*
          <div className="contact-section">
            <h2>Around the Web</h2>
            <ul>
              <li><strong>Email</strong>: diamohaminsa@gmail.com</li>
              <li><strong>GitHub</strong>: <a href="https://github.com/methzen">Here is my public github repository</a></li>
            </ul>
          </div>
          */}
        </div>
        <Footer />
      </div>
    )
  }
}
