import React from "react";
import styled from "styled-components";
import { Heading } from "../../components/StyledComponents";
import TrendindItem from "./TrendindItem";

export default function TrendindContainer({ data }) {
  return (
    <>
      <Heading trending={"isTrending"}>Trending</Heading>
      <Wrapper>
        {data.map((item, index) => {
          if (item.isTrending) {
            return <TrendindItem key={index} item={item} />;
          }
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;
