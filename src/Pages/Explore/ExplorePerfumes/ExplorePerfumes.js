import React, { useEffect, useState } from "react";
import ExplorePerfume from "../ExplorePerfume/ExplorePerfume";
import ScaleLoader from "react-spinners/ScaleLoader";
import { CARDS } from "../../styles/Cards.styles";
import { Pagination } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import noSearchRes from "../../../images/no_search_result.png";
import {
  ExploreHeader,
  ExploreSearchContainer,
  NoSearchResultContainer,
} from "../../styles/Random.styles";
import styles from "./ExplorePerfumes.module.css";

const ExplorePerfumes = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageData, setPageData] = useState(0);
  const [searchResults, setSearchResults] = useState(false);
  const dataSize = 6;

  useEffect(() => {
    fetch(`http://localhost:5000/perfumes?page=${pageData}&&size=${dataSize}`)
      .then((res) => res.json())
      .then((data) => {
        setPerfumes(data.perfumes);
        const count = data.count;
        const pageNumber = Math.ceil(count / dataSize);
        setPageCount(pageNumber);
      });
  }, [pageData]);

  useEffect(() => {
    fetch("http://localhost:5000/allPerfumes")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = allProducts.filter((element) =>
      element.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
    if (searchText === "") {
      setSearchResults(false);
    } else {
      setSearchResults(true);
    }
  };

  return (
    <div style={{ color: "#333f47", marginBottom: "120px" }}>
      <ExploreHeader>
        <h2
          className={`container mb-2 text-center ${styles.explore_title}`}
          style={{ color: "#fff" }}
        >
          Explore Our All
          {perfumes.length >= 2 ? " Perfumes" : " Perfume"} Here!
        </h2>
        <br />
        <ExploreSearchContainer className="box">
          <IoSearchOutline color="#555" size={20} />
          <input
            type="text"
            onChange={handleSearch}
            name=""
            id=""
            placeholder="Search Perfumes..."
          />
        </ExploreSearchContainer>
      </ExploreHeader>
      <br />
      {allProducts.length ? (
        <>
          {searchResults ? (
            <>
              {displayProducts.length ? (
                <div className="perfumes_display">
                  <div className="all_perfumes">
                    <CARDS>
                      <ul>
                        {displayProducts.map((perfume) => (
                          <ExplorePerfume
                            key={perfume._id}
                            perfume={perfume}
                          ></ExplorePerfume>
                        ))}
                      </ul>
                    </CARDS>
                  </div>
                  <br />
                  <br />
                  {!searchResults && (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Pagination
                        count={pageCount}
                        onChange={(event, value) => setPageData(value - 1)}
                        size="large"
                        showFirstButton
                        showLastButton
                      />
                    </div>
                  )}
                </div>
              ) : (
                <NoSearchResultContainer>
                  <img src={noSearchRes} alt="" />
                  <h4>Sorry, No search result found!</h4>
                </NoSearchResultContainer>
              )}
            </>
          ) : (
            <div className="perfumes_display">
              <div className="all_perfumes">
                <CARDS>
                  <ul>
                    {perfumes.map((perfume) => (
                      <ExplorePerfume
                        key={perfume._id}
                        perfume={perfume}
                      ></ExplorePerfume>
                    ))}
                  </ul>
                </CARDS>
              </div>
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Pagination
                  count={pageCount}
                  onChange={(event, value) => setPageData(value - 1)}
                  size="large"
                  showFirstButton
                  showLastButton
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "38px",
          }}
        >
          <ScaleLoader color={"#003665"} size={85} />
        </div>
      )}
    </div>
  );
};

export default ExplorePerfumes;
