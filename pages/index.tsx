import type { NextPage } from 'next'
import Person from '../component/Person/Person'
import Header from '../component/header/Header'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../component/globalStyles';
import { darkTheme, lightTheme } from '../component/theme';
import { useSelector } from 'react-redux';

const Home: NextPage = () => {
  // @ts-ignore
  const theme = useSelector(state=>state.swapTheme)
  return (<div>
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <Person />
    </ThemeProvider>
  </div>
  )
}

export default Home
