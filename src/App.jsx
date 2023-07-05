import { useState, createContext, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import dataJson from "./data";

import Bookmarked from "./pages/bookmarked/Bookmarked";
import Home from "./pages/home/Home";
import Movies from "./pages/moves/Movies";
import TVseries from "./pages/TVseries/TVseries";

export const MyContext = createContext(null);

export default function App() {
  const [data, setData] = useState(dataJson);
  const [placeholder, setPlaceholder] = useState(
    "Search for movies or TV series"
  );
  const [inputValue, setInputValue] = useState("");

  function handleBookmarkClick(index) {
    console.log(index);
    setData(
      data.map((item) => {
        if (item.title === index) {
          return {
            ...item,
            isBookmarked: !item.isBookmarked,
          };
        }
        return item;
      })
    );
  }

  return (
    <>
      <MyContext.Provider value={{ handleBookmarkClick, inputValue }}>
        <NavBar setPlaceholder={setPlaceholder} />
        <Container>
          <SearchBar
            placeholder={placeholder}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/Moves" element={<Movies data={data} />} />
            <Route path="/TVseries" element={<TVseries data={data} />} />
            <Route path="/Bookmarked" element={<Bookmarked data={data} />} />
          </Routes>
        </Container>
      </MyContext.Provider>
    </>
  );
}

const Container = styled.main`
  margin: 0 16px;
  @media (min-width: 480px) {
    margin: 0 25px;
  }
  @media (min-width: 1024px) {
    margin: 65px 36px 0 164px;
  }
`;
