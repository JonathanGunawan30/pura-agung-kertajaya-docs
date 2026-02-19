import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import type {ReactNode} from 'react';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dokumentasi Terpusat',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Satu pintu untuk semua panduan: Manajemen Pura, Kegiatan Pasraman, 
        Program Yayasan, hingga pengaturan Global website.
      </>
    ),
  },
  {
    title: 'Visualisasi Jelas',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dilengkapi dengan tangkapan layar (screenshot) aplikasi dan instruksi 
        langkah demi langkah yang mudah diikuti oleh admin baru sekalipun.
      </>
    ),
  },
  {
    title: 'Mudah Diakses',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Panduan berbasis web yang cepat dan responsif. Dapat diakses kapan saja 
        sebagai referensi utama bagi seluruh pengurus.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}