/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useEffect } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import DefaultHeader from "@components/molecules/DefaultHeader";
import DefaultFooter from "@components/molecules/DefaultFooter";
import { Page, Box, Icon } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type HomePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function HomePage(props: HomePageProps): JSX.Element {
  return (
    <Page className={styles.page_container}>
      <DefaultHeader className={styles.defaultheader_1} />
      <Box className={styles.box_0}>
        <Icon
          color={undefined}
          iconName="AiOutlineHome"
          size={Number(24)}
          className={styles.icon_1}
        />
        <Box className={styles.box_2} />
      </Box>
      <DefaultFooter className={styles.defaultfooter_1} />
    </Page>
  );
}
export default HomePage;
