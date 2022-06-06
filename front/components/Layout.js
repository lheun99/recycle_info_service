import React from "react";
import Nav from "./Nav";
import Head from "next/Head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>구해줘! 지구</title>
                <meta keyword="Safe the Earth"></meta>
                <meta contents="Safe the Earth"></meta>
            </Head>
            <Nav />
            <div>{children}</div>
        </>
    );
};

export default Layout;
