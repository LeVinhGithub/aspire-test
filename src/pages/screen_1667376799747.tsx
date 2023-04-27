import type { NextPageContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate } from "react-query";
import { initServerInfo } from "@utils/serverSide";
import Screen1667376799747Page from "@components/pages/Screen1667376799747";


export async function getStaticProps(context: NextPageContext) {
  const { locale = "en", query } = context;
  const options: {
    props?: Record<string, unknown>;
    redirect?: Record<string, unknown>;
  } = {};
  const {  queryClient } = await initServerInfo(context, { session: false });  

    return {
    ...options,
    props: {
      query: query || null,
            dehydratedState: dehydrate(queryClient),
      seo: {
        title: "Luf",
        description: "",
      },
      ...(await serverSideTranslations(locale)),
      ...(options.props || {})
    },
  };
}


export default Screen1667376799747Page;
