import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";
import { RecoilRoot } from "recoil";
import wrapper from '../Providers/createCtx'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    );
}

export default MyApp;
