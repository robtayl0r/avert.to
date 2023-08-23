import '../styles/globals.css';
import Layout from "../components/layout";
import {AppProps} from "next/app";

export default function MyApp({ Component, pageProps}: AppProps){
    return (
        <Layout>
            <Component {...pageProps}></Component>
        </Layout>
    )
}