//layout
import "../styles/layout.css"

//components
import "../styles/components/header.css"
import "../styles/components/footer.css"

// pages
import "../styles/pages/homepage.css"
import "../styles/pages/blog-post.css"
import "../styles/pages/post.css"
import "../styles/pages/contact.css"
import "../styles/pages/about.css"
import "../styles/pages/_error.css"
//import "node_modules/video-react/dist/video-react.css";

// external import
import "../styles/prismjs.css"

export default function MyApp({ Component, pageProps}){
    return <Component  {...pageProps} />
}