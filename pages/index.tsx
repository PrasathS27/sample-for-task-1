
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Our Project</title>
        <meta name="description" content="Welcome to our amazing project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Our Project! 👋
        </h1>

        <p className={styles.description}>
          We're excited to have you here
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>About Us &rarr;</h2>
            <p>Learn more about our project and what we do.</p>
          </div>

          <div className={styles.card}>
            <h2>Features &rarr;</h2>
            <p>Discover the amazing features we offer.</p>
          </div>

          <div className={styles.card}>
            <h2>Get Started &rarr;</h2>
            <p>Follow our quick start guide to begin.</p>
          </div>

          <div className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Get in touch with our team for support.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
