import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import { useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  // Added Bootstrap JS in useeffect hook load page fully to use the window object
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return <Component {...pageProps} />
}

export default MyApp
