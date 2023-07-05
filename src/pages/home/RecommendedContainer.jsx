import React from "react";
import MovieItem from "../../components/MovieItem";
import { Heading, Container, Wrapper } from "../../components/StyledComponents";

export default function RecommendedContainer({ data }) {
  return (
    <Container>
      <Heading>Recommended for you</Heading>
      <Wrapper>
        {data.map((item, index) => {
          if (!item.isTrending) {
            return <MovieItem item={item} key={index}/>;
          }
        })}
      </Wrapper>
    </Container>
  );
}
