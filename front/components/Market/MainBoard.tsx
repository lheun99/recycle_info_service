import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "../shared/Search";
import SingleBoard from "./SingleBoard";
import Write from "./Write";
import { get } from "../../api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const start = 1;
    const per = 10;
    const res = await get(`post/list?page=${start}&perPage=${per}`);
    const data = res.data.data;
    return {
        props: { data },
    };
};

const MainBoard = ({
    props,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [isWrite, setIsWrite] = useState(false);
    const [htmlStr, setHtmlStr] = useState("");
    const [title, setTitle] = useState("");
    const [board, setBoard] = useState<any[]>([]);
    console.log(props);

    // const getBoardsList = async () => {
    //     const page = 1;
    //     const zz = 10;
    //     const res = await get(`post/list?page=${page}&perPage=${zz}`);
    //     const boardsList = [...res.data.data.postLists];
    //     setBoard(boardsList);
    // };
    useEffect(() => {
        // getBoardsList();
    }, []);

    return (
        <Wrapper>
            <Container>
                <Title>중고마켓🥕</Title>
                <Menu>
                    <Search />
                    <Button onClick={() => setIsWrite((cur) => !cur)}>
                        {isWrite ? "🏠 메인으로" : "+ 글쓰러 가기 ✏️"}
                    </Button>
                </Menu>
                <BoardWrapper>
                    {isWrite ? (
                        <Write
                            title={title}
                            setTitle={setTitle}
                            htmlStr={htmlStr}
                            setHtmlStr={setHtmlStr}
                            setIsWrite={setIsWrite}
                        />
                    ) : (
                        board?.map((item, index) => (
                            <SingleBoard
                                key={index}
                                postImg={item.postImg}
                                content={item.content}
                                title={item.title}
                            />
                        ))
                    )}
                </BoardWrapper>
            </Container>
        </Wrapper>
    );
};

export default MainBoard;

const Wrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Container = styled.div`
    width: 80%;
    background-color: var(--deepgray);
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
`;

const Title = styled.h1`
    margin: 0 0 30px 0;
    padding: 11px 0;
    width: 100%;
    text-align: center;
    background-color: var(--green);
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 30px 0 10px 0;
`;

const Button = styled.button`
    font-family: Elice Digital Baeum;
    width: 410px;
    height: 40px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 30px;
`;

const BoardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
