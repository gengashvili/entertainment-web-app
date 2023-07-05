import React, { useContext } from "react";
import MovieItem from "../../components/MovieItem";
import { Heading, Container, Wrapper } from "../../components/StyledComponents";
import { MyContext } from "../../App";
import SearchResult from "../../components/SearchResult";

export default function Movies({ data }) {
  const context = useContext(MyContext);
  const FilteredData = data.filter((item) => item.category === "Movie");

  return (
    <>
      {context.inputValue === "" ? (
        <Container>
          <Heading>Moves</Heading>
          <Wrapper>
            {FilteredData.map((item, index) => {
              return <MovieItem item={item} key={index} />;
            })}
          </Wrapper>
        </Container>
      ) : (
        <SearchResult data={FilteredData} />
      )}
    </>
  );
}
