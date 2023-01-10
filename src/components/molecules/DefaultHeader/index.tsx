/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Image from "next/future/image";
import DefaultHeaderMenu from "@components/molecules/DefaultHeaderMenu";
import DefaultHamburgerMenu from "@components/molecules/DefaultHamburgerMenu";
import { Box, Row, Col } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type DefaultHeaderMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
};
function DefaultHeaderMolecule(props: DefaultHeaderMoleculeProps): JSX.Element {
  return (
    <Box
      className={`${styles.header_0} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box className={styles.header_box_0}>
        <Row
          align={"middle"}
          gutter={[32, 32]}
          justify={"space-between"}
          className={styles.header_row_0}
        >
          <Col flex={"100px"}>
            <Box className={styles.header_box_1}>
              <Image
                src={`https://studio.jitera.app/jitera-white-logo.svg`}
                width={"100"}
                height={"0"}
                alt={""}
                className={styles.header_image_0}
              />
            </Box>
          </Col>
          <Col flex={"1px"} responsiveVisibility={["desktop"]}>
            <DefaultHeaderMenu className={styles.header_defaultheadermenu_0} />
          </Col>
          <Col responsiveVisibility={["tablet", "mobile"]}>
            <DefaultHamburgerMenu className={styles.header_defaulthamburgermenu_1} />
          </Col>
        </Row>
      </Box>
    </Box>
  );
}
export default DefaultHeaderMolecule;
