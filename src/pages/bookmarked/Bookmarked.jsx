import React, { useContext } from "react";
import MovieItem from "../../components/MovieItem";
import { Heading, Container, Wrapper } from "../../components/StyledComponents";
import { MyContext } from "../../App";
import SearchResult from "../../components/SearchResult";

export default function Bookmarked({ data }) {
  const context = useContext(MyContext);
  const FilteredData = data.filter((item) => item.isBookmarked);

  return (
    <>
      {context.inputValue === "" ? (
        <>
          <Container>
            <Heading>Bookmarked Movies</Heading>
            <Wrapper>
              {FilteredData.map((item, index) => {
                if (item.category === "Movie") {
                  return <MovieItem item={item} key={index} />;
                }
              })}
            </Wrapper>
          </Container>
          <Container>
            <Heading>Bookmarked TV Series</Heading>
            <Wrapper>
              {FilteredData.map((item, index) => {
                if (item.category === "TV Series") {
                  return <MovieItem item={item} index={index} />;
                }
              })}
            </Wrapper>
          </Container>
        </>
      ) : (
        <SearchResult data={FilteredData} />
      )}
    </>
  );
}
