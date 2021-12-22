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
            <p>Mouhamadou Dia, engineer and PhD in applied mathematics.</p>
            <p>Since 2015, I have been helping companies in the energy and transport sectors, to implement numerical methods and strategies that help them make better decisions and solve complexe and challenging industrial problems.</p>

            <p>If you have any comments, ideas, critiques, or you just want to say hi, don’t hesitate to send me an email at diamohaminsa@gmail.com!</p>
          </div>
          <div className="contact-section">
            <h2>Around the Web</h2>
            <ul>
              <li><strong>Email</strong>: diamohaminsa@gmail.com</li>
              <li><strong>GitHub</strong>: <a href="https://github.com/coder-rocket-fuel">Coder Rocket Fuel</a></li>
              <li><strong>Twitter</strong>: <a href="https://twitter.com/CoderRocketFuel">Coder Rocket Fuel Twitter Page</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
