import type { NextPageContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate } from "react-query";
import { initServerInfo } from "@utils/serverSide";
import JobOpeningDetailPage from "@components/pages/JobOpeningDetail";


export async function getServerSideProps(context: NextPageContext) {
  const { locale = "en", query } = context;
  const options: {
    props?: Record<string, unknown>;
    redirect?: Record<string, unknown>;
  } = {};
  const { session, queryClient } = await initServerInfo(context);  

  if (!session?.user?.accessToken) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    }
  }

    return {
    ...options,
    props: {
      query: query || null,
      session,      dehydratedState: dehydrate(queryClient),
      seo: {
        title: "Luf",
        description: "",
      },
      ...(await serverSideTranslations(locale)),
      ...(options.props || {})
    },
  };
}


export default JobOpeningDetailPage;
