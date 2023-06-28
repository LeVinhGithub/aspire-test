import DefaultHeader from '@components/molecules/DefaultHeader';
import DefaultFooter from '@components/molecules/DefaultFooter';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type HomeProps = DefaultPageProps & {
  className?: string;
};

function Home(props: HomeProps): JSX.Element {
  return (
    <div className={styles.page_container}>
      <DefaultHeader className={styles.defaultheader_1} />
      <div className={styles.box_0} />
      <DefaultFooter className={styles.defaultheader_1} />
    </div>
  );
}

export default Home;
