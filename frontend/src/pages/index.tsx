import Head from 'next/head';
import GlobalStyle from '../styles/globals';
import { Calculator } from '../components/Calculator';
import { Header } from '../components/Header';
import { CalculatorProvider } from '../contexts/CalculatorContext';
import { Div } from '../styles/pages/Home';


export default function Home() {
  return (
    <CalculatorProvider>
      <GlobalStyle />
      <Div>
        <Head>
          <title>Calculator-React</title>
        </Head>

        <Header />

        <section>
          <Calculator/>
        </section>
      </Div>
    </CalculatorProvider>
  )
}
