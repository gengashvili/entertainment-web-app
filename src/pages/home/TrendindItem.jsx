import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BookMarkIcon, Dot, PlayBtn, TVIcon, MovieIcon } from "../../components/StyledComponents";
import { MyContext } from "../../App";


export default function TrendindItem({ item}) {
  const [showBtn, setShowBtn] = useState('');

  const context = useContext(MyContext);

  return (
    <Container 
      bg={item.thumbnail.trending} 
      onMouseEnter={() => setShowBtn('show')}
      onMouseLeave={() => setShowBtn('hide')}
    >
      <BookMarkIcon 
        showIcon={item.isBookmarked} 
        onClick={()=>context.handleBookmarkClick(item.title)}
      />
      <PlayBtn show={showBtn}/>
      <TextContent>
        <Wrapper>
          <p>{item.year}</p>
          <Dot/>
          {item.category === "Movie" ? <MovieIcon/>:<TVIcon/>}
          <p>{item.category}</p>
          <Dot/>
          <p>{item.rating}</p>
        </Wrapper>
        <h4>{item.title}</h4>
      </TextContent>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  width: 240px;
  height: 140px;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  background-image: url(${({ bg }) => bg.small});
  background-repeat: no-repeat;
  background-size: 100%;
  color: #ffffff;
  @media (min-width: 740px) {
    width: 470px;
    height: 230px;
    margin-right: 40px;
    background-image: url(${({ bg }) => bg.large});
  }
`;

const TextContent = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  h4{
    margin-top: 5px;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
  }
  @media (min-width: 740px){
    left: 24px;
    bottom: 24px;
    font-size: 15px;
      h4{
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
