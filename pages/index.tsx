import type { NextPage } from 'next'
import Header from '../component/header/Header'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../component/globalStyles';
import { darkTheme, lightTheme } from '../component/theme';
import { useSelector } from 'react-redux';
import data from '../component/Project/data'
import Projects from '../component/Project/Projects';
import Person from '../component/Person/Person';
import Contact from '../component/contact/Contact';

const Home: NextPage = () => {

  // @ts-ignore
  const theme = useSelector(state => state.swapTheme)
  return (<div>
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div style={{ fontFamily: 'Roboto' }}>
        <Header />
        <Person />
        <Projects data={data} />
        <Contact />
      </div>
    </ThemeProvider>
  </div>
  )
}

export default Home
