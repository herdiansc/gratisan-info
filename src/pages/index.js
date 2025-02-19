import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div style={{display: "flex", flexWrap:"wrap", alignItems: "center", justifyContent: "center", height: "80vh"}}>
      <div className="col col--7">
      <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title text--uppercase">
          Kumpulan Hal-Hal Gratis
        </Heading>
        <p className="hero__subtitle text--capitalize">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={`button button--primary button--lg col col--3`}
            to="/gratis/intro"
          >
            <span className="text--light">Lihat Info Gratisan</span>
          </Link>
          {/* <span className="col col--1">atau</span>
          <Link
            className="button button--primary button--lg  col col--3 text--light"
            to="/artikel"
          >
            <span className="text--light">Info</span>
          </Link> */}
        </div>
      </div>
    </header>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Gratis! Template Google Sheets. Ebook. Aplikasi`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
