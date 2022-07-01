import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

type AppLayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => {
    return (
        <div>
            <title>구해줘!, 지구</title>
            <Nav />
            <BodyWrapper>{children}</BodyWrapper>
            <Footer />
        </div>
    );
};

export default Layout;

const BodyWrapper = styled.div`
    min-height: 100vh;
`;
