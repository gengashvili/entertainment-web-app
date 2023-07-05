import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  BookMarkIcon,
  MovieIcon,
  TVIcon,
  Dot,
  PlayBtn,
} from "./StyledComponents";
import { MyContext } from "../App";

export default function MovieItem({ item }) {
  const [showBtn, setShowBtn] = useState("");
  const context = useContext(MyContext);

  return (
    <Container
      onMouseEnter={() => setShowBtn("show")}
      onMouseLeave={() => setShowBtn("hide")}
    >
      <Image>
        <img className="bg_image" src={item.thumbnail.regular.small} />
        <BookMarkIcon
          showIcon={item.isBookmarked}
          onClick={() => context.handleBookmarkClick(item.title)}
        />
        <PlayBtn show={showBtn} />
      </Image>
      <TextContent>
        <Wrapper>
          <p>{item.year}</p>
          <Dot />
          {item.category === "Movie" ? <MovieIcon /> : <TVIcon />}
          <p>{item.category}</p>
          <Dot />
          <p>{item.rating}</p>
        </Wrapper>
        <h4>{item.title}</h4>
      </TextContent>
    </Container>
  );
}

const Container = styled.div`
  /* position: relative; */
`;

const Image = styled.div`
  position: relative;
  .bg_image {
    width: 100%;
    border-radius: 8px;
  }
`;

const TextContent = styled.div`
  margin-top: 8px;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  h4 {
    margin-top: 5px;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
  }
  @media (min-width: 740px) {
    font-size: 15px;
    h4 {
      font-size: 24px;
      line-height: 30px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.75;
`;
