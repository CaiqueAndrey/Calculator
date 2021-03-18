import Head from 'next/head';
import { Calculator } from '../components/Calculator';
import { Header } from '../components/Header';
import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator-React</title>
      </Head>

      <Header />

      <section>
        <Calculator/>
      </section>
    </div>
  )
}
