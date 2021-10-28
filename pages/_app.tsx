import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { createStore } from 'redux'
import { rootReducer } from '../component/redux/index'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax';

const store = createStore(rootReducer)

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Provider store={store}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Provider>
  </>)
}
export default MyApp
