import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { createStore } from 'redux'
import { rootReducer } from '../component/redux/index'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

const store = createStore(rootReducer)

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>)
}
export default MyApp
