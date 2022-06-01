import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { createStore } from 'redux'
import { rootReducer } from '../component/redux/index'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';

// import aos styles
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const store = createStore(rootReducer)

function MyApp({ Component, pageProps }: any) {

  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 10,
    });
  }, []);
  return (<>
    <Provider store={store}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Provider>
  </>)
}
export default MyApp
