import '@styles/app.css'
import 'antd/dist/antd.css';
import { useMemo, FunctionComponent } from 'react'
import type { AppProps } from 'next/app'
import { Session } from "next-auth";
import { SessionProvider } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { appWithTranslation, SSRConfig } from 'next-i18next'
import nextI18nConfig from 'next-i18next.config'

import { Provider as RollBarProvider, ErrorBoundary } from '@rollbar/react';
import AppProvider from '@components/AppProvider';




const rollbarConfig = {
  accessToken: process.env.ROLLBAR_CLIENT_TOKEN,
  environment: process.env.NODE_ENV,
};

type PageProps = { dehydratedState: unknown, session: Session, seo: { title: string; description: string } } & SSRConfig
const MyApp: FunctionComponent<AppProps<PageProps>> = ({ Component, pageProps }) => {
  const queryClient = useMemo(() => new QueryClient(), []);
    return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={pageProps.session}>
          <NextSeo
            title={pageProps?.seo?.title}
            description={pageProps?.seo?.description}
          />
                      <RollBarProvider config={rollbarConfig}>
              <ErrorBoundary>
                <AppProvider>
                  
                  <Component {...pageProps} />
                </AppProvider>
              </ErrorBoundary>
            </RollBarProvider>
                  </SessionProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp, nextI18nConfig)
