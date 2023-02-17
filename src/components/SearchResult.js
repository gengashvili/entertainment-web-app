import React, { useContext } from "react";
import { Heading, Container } from "./StyledComponents";
import MovieItem from "./MovieItem";
import { MyContext } from "../App";
import styled from "styled-components";

export default function SearchResult({ data }) {
  const context = useContext(MyContext);
  const SearchResult = data.filter((item) =>
    item.title.toLowerCase().includes(context.inputValue)
  );

  return (
    <Container>
      <Heading>
        Found {SearchResult.length} results for '{context.inputValue}'
      </Heading>
      <SearchWrapper>
        {SearchResult.map((item, index) => {
          return <MovieItem item={item} index={index} />;
        })}
      </SearchWrapper>
    </Container>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  div{
    margin-right: 15px;
  }
`;
