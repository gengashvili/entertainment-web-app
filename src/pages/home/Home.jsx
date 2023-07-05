import React, { useContext } from "react";
import RecommendedContainer from "./RecommendedContainer";
import TrendindContainer from "./TrendindContainer";
import { MyContext } from "../../App";
import SearchResult from "../../components/SearchResult";

export default function Home({ data }) {
  const context = useContext(MyContext);
  return (
    <>
      {context.inputValue === "" ? (
        <div>
          <TrendindContainer data={data} />
          <RecommendedContainer data={data} />
        </div>
      ) : (
        <SearchResult data={data}/>
      )}
    </>
  );
}
