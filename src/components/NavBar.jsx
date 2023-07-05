import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as NavHome } from "../svgs/icon-nav-home.svg";
import { ReactComponent as MovieCategory } from "../svgs/icon-category-movie.svg";
import { ReactComponent as NavTVIcon } from "../svgs/icon-nav-tv-series.svg";
import { ReactComponent as BookMarkFull } from "../svgs/icon-bookmark-full.svg";

export default function NavBar({ setPlaceholder }) {
  return (
    <Wrapper>
      <Logo src= "./assets/Movie.png" alt="" />
      <NavItemsWrapper>
        <NavLink to="/">
          <StyledNavHome
            className="nav_icon"
            onClick={() => setPlaceholder("Search for movies or TV series")}
          />
        </NavLink>

        <NavLink to="Moves">
          <StyledMovieCategory
            className="nav_icon"
            onClick={() => setPlaceholder("Search for movies")}
          />
        </NavLink>

        <NavLink to="TVseries">
          <StyledNavTVIcon
            className="nav_icon"
            onClick={() => setPlaceholder("Search for TV series")}
          />
        </NavLink>

        <NavLink to="Bookmarked">
          <StyledBookMarkFull
            className="nav_icon"
            onClick={() => setPlaceholder("Search for bookmarked shows")}
          />
        </NavLink>
      </NavItemsWrapper>
      <Avatar
        className="test"
        src= "./assets/image-avatar.png"
        alt=""
      />
    </Wrapper>
  );
}
const Wrapper = styled.header`
  max-width: 100%;
  height: 56px;
  background: #161d2f;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 480px) {
    height: 72px;
    margin: 23px 23px 0 23px;
    border-radius: 10px;
    padding-left: 24px;
  }
  @media (min-width: 1024px) {
    width: 96px;
    height: 960px;
    display: block;
    text-align: center;
    position: fixed;
    margin: 0;
    top: 32px;
    left: 32px;
  }
`;
const Logo = styled.img`
  width: 25px;
  height: 20px;
  @media (min-width: 480px) {
    width: 32px;
    height: 25.6px;
  }
  @media (min-width: 1024px) {
    margin: 35px 0 75px 0;
  }
`;
const Avatar = styled.img`
  width: 24px;
  height: 24px;
  @media (min-width: 1024px) {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 32px;
    left: 28px;
  }
`;

const NavItemsWrapper = styled.nav`
  display: flex;
  @media (min-width: 1024px) {
    display: block;
  }
  .nav_icon {
    width: 16px;
    height: 16px;
    margin: 0 12px;
    cursor: pointer;

    path {
      fill: #5a698f;
    }
    :hover {
      path {
        fill: #fc4747;
      }
    }
    @media (min-width: 480px) {
      width: 20px;
      height: 20px;
      margin: 0 16px;
    }
    @media (min-width: 1024px) {
      margin-bottom: 40px;
    }
  }

  .active{
    path{
      fill: #FFFFFF;
    }
  }
`;

const StyledNavHome = styled(NavHome)`
  path {
    transform: scale(0.8);
    @media (min-width: 480px) {
      transform: scale(1);
    }
  }
`;

const StyledMovieCategory = styled(MovieCategory)`
  path {
    transform: scale(1.333);
    @media (min-width: 480px) {
      transform: scale(1.667);
    }
  }
`;

const StyledNavTVIcon = styled(NavTVIcon)`
  path {
    transform: scale(0.8);
    @media (min-width: 480px) {
      transform: scale(1);
    }
  }
`;

const StyledBookMarkFull = styled(BookMarkFull)`
  path {
    transform: scale(1.1429);
    @media (min-width: 480px) {
      transform: scale(1.429);
    }
  }
`;
