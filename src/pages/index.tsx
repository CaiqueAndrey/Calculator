import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals';
import { CalculatorProvider } from '../contexts/CalculatorContext';
import { Calculator } from '../components/Calculator';
import { Header } from '../components/Header';
import { Div } from '../styles/pages/Home';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import usePersistedState from '../hooks/usePersistedState';
interface HomeProps {
  theme: DefaultTheme;
};

export default function Home(props: HomeProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', props.theme);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <CalculatorProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Div>
          <Head>
            <title>Calculadora</title>
          </Head>

          <Header toggleTheme={toggleTheme} />

          <section>
            <Calculator/>
          </section>
        </Div>
      </ThemeProvider>
    </CalculatorProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { theme } = ctx.req.cookies;

  return {
    props: { 
      theme: Object(JSON.parse(theme)) 
    }
  };
}