import styled from "styled-components";
import emptyBookmark from "../svgs/icon-bookmark-empty.svg";
import fullBookmark from "../svgs/icon-bookmark-full.svg";
import playImg from "../svgs/icon-play.svg";

import { ReactComponent as movieIconsvg } from "../svgs/icon-category-movie.svg";
import { ReactComponent as TVIconsvg } from "../svgs/icon-nav-tv-series.svg";

export const Heading = styled.h2`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.3125px;
  color: #ffffff;
  margin-bottom: ${({ trending }) => (trending ? "16px" : "24px")};
  @media (min-width: 480px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
    margin-bottom: 25px;
  }
  @media (min-width: 1024px) {
    margin-bottom: ${({ trending }) => (trending ? "25px" : "38px")};
  }
`;

export const BookMarkIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgb(16, 20, 30, 0.5);
  background-image: ${({ showIcon }) =>
    showIcon ? `url(${fullBookmark})` : `url(${emptyBookmark})`};
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  @media (min-width: 740px) {
    top: 16px;
    right: 24px;
  }
`;

export function PlayBtn({ show, trending }) {
  return (
    <StyledPlayBtn show={show} trending={trending}>
      <img src={playImg} alt="" />
      Play
    </StyledPlayBtn>
  );
}

export const StyledPlayBtn = styled.div`
  display: ${({ show }) => (show === "show" ? "flex" : "none")};
  align-items: center;
  width: 80px;
  height: 32px;
  border-radius: 28.5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  background: rgb(255, 255, 255, 0.25);
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    margin: 0 7px;
    @media (min-width: 740px) {
      width: 30px;
      height: 30px;
      margin: 0 19px 0 9px;
    }
  }
  @media (min-width: 740px) {
    width: 117px;
    height: 48px;
    font-size: 18px;
  }
`;

export const Dot = styled.div`
  width: 3px;
  height: 3px;
  margin: 0 8px;
  border-radius: 50%;
  background: #ffffff;
  opacity: 0.5;
`;

export const TVIcon = styled(TVIconsvg)`
  width: 12px;
  height: 12px;
  margin-right: 6px;
  path {
    fill: #ffffff;
    transform: scale(0.6);
  }
`;

export const MovieIcon = styled(movieIconsvg)`
  width: 12px;
  height: 12px;
  margin-right: 6px;
  path {
    fill: #ffffff;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  margin-top: 24px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px 30px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 32px 40px;
  }
  @media (min-width: 1524px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
